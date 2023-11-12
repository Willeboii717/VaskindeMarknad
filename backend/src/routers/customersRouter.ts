import express, {NextFunction, Request, Response} from "express";
const router = express.Router();
//Database
import { executeGetQuery } from "../databaseHandler/db.query";
//Interfaces
import { CustomerModel, loginCredentialModel } from '../models/customer';
import { httpErrorModel } from "../models/error";
//Validators
import { createCustomerValidator, loginValidator } from '../validators/customerValidator';
import { runValidator } from "../validators/validatorRunner";
//Controllers
import { checkIfUserExists } from "../controllers/CustomerController";


router.get('/getUserByID/:ID',
async (req: Request, res: Response) => {
  console.log("[server]: entering Get, GetUserByID");
  const param = req.params.ID;
  res.json(param);

  });

router.post('/createUser',
  createCustomerValidator, // determines what should be validated
  runValidator, // runs validator on body
  checkIfUserExists, // Checks if users exist
  async (req: Request, res: Response) => {
    console.log("[server]: entering Post, createCustomer");
    // Placing body in User interface
    const user: CustomerModel = req.body;
    const query = 'INSERT INTO customers (username, email, firstname, lastname, password) VALUES (?, ?, ?, ?, ?)';
    
    executeGetQuery(query, [user.username, user.email, user.firstname, user.lastname, user.password])
      .then((result) => {
        console.log(result);
        res.send("User created successfully"); //This is a WIP, need to split DB query, so this doesnt expect a return value
      })
      .catch((error) => {
        if (error === "NO_DATA") {
          console.log(error);
          res.send("NO DATA ERROR");
        }
        else {
          console.log(error);
          res.send("UNSPECIFIED ERROR");
        }
      });
  });



router.post('/loginUser',
  loginValidator,
  runValidator,
  async (req: Request, res: Response) => {
    console.log("[server]: entering Post, loginCustomer ", req.body);
    const frontEndDataUser:loginCredentialModel = req.body;
    try {
      //Query definition
      const query = 'SELECT * FROM CUSTOMERS WHERE USERNAME = ? AND PASSWORD = ?';
      //Exe Query
      const resultOfQuery:CustomerModel = await executeGetQuery(query, [frontEndDataUser.username, frontEndDataUser.password])
      //If successful find of customer, return
      if (resultOfQuery != null) {
        res.status(201).send({msg: "Customer Authenticated"});
        console.log("[server]: Post Success, Customer Authenticated");
      }
    }    
    // Handle any database errors
    catch (error) {
      if (error === "NO_DATA") {
        const resError: httpErrorModel = {
          code: 'CREDENTIALS_MISMATCHED',
          message: 'Credentials mismatch',
          status: 401,
        };
        res.status(resError.status).json({ error: resError.code, message: resError.message });
        console.log("[server]: POST Failure, Credentials mismatch");
      }
      else {
        const resError: httpErrorModel = {
          code: 'SQL_ERROR',
          message: 'Error in database, not Authenticated',
          status: 500,
        };
        res.status(resError.status).json({ error: resError.code, message: resError.message });
        console.log("[server]: POST Failure, Database Error");
      }
    }
});

module.exports = router;
