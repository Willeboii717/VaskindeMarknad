import express, {NextFunction, Request, Response} from "express";
const router = express.Router();
//Database
import { executeGETQuery } from "../databaseHandler/db.query";
//Interfaces
import { CustomerModel, loginCredentialModel } from '../models/customer';
import { httpErrorModel } from "../models/error";
//Validators
import { createCustomerValidator, loginValidator } from '../validators/customerValidator';
import { runValidator } from "../validators/validatorRunner";
//Controllers
import { checkIfUserExists } from "../controllers/CustomerController";


router.get('/getUserByID/:ID',
async (req: Request, res: Response, next: NextFunction) => {
  console.log("[server]: entering Get, GetUserByID");
  const param = req.params.ID;
  try {
    const query = "SELECT * FROM CUSTOMERS WHERE ID = ?"
    const queryResult = await executeGETQuery(query, [param]);
    console.log(queryResult);
    
    if (queryResult.length <= 0 ) {
      throw("NO_DATA")
    }
    res.json(queryResult);
  } catch (error) {
      if (error == "NO_DATA") {
        res.json({error: "NO DATA"});
        next();
      }
      else 
        res.json({error: "Some error"});
  }


  });

router.post('/createUser',
  createCustomerValidator, // determines what should be validated
  runValidator, // runs validator on body

  checkIfUserExists,   // Checks if users exist
  async (req: Request, res: Response, next: NextFunction) => {
    console.log("[server]: entering Post, createCustomer");
    // Placing body in User interface
    const user: CustomerModel = req.body;
    const query = 'INSERT INTO customers (username, email, firstname, lastname, password) VALUES (?, ?, ?, ?, ?)';
    
    await executeGETQuery(query, [user.username, user.email, user.firstname, user.lastname, user.password])
      .then((result) => {
        console.log("Result from DB: ", result.affectedRows);
        res.send("User created successfully").end(); //This is a WIP, 
      })
      .catch((error) => {
          console.log(error);
          res.send("UNSPECIFIED ERROR");
      });
  });



router.get('/loginUser',
  loginValidator,
  runValidator,
  async (req: Request, res: Response) => {
    console.log("[server]: entering GET, loginCustomer ", req.body);
    const frontEndDataUser:loginCredentialModel = req.body;
    try {
      //Query definition
      const query = 'SELECT * FROM CUSTOMERS WHERE USERNAME = ? AND PASSWORD = ?';
      //Exe Query
      const resultOfQuery:CustomerModel[] = await executeGETQuery(query, [frontEndDataUser.username, frontEndDataUser.password])
      
      if (Object.keys(resultOfQuery).length >= 1) {  //If successful find of customer, return
        res.status(201).send({msg: "Customer Authenticated"});
        console.log("[server]: GET Success, Customer Authenticated");
      }
      else { //If not any db errors, but no data returned
        const resError: httpErrorModel = {
          code: 'CREDENTIALS_MISMATCHED',
          message: 'Credentials mismatch',
          status: 401,
        };
        res.status(resError.status).json(resError);
        console.log("[server]: GET Failure, Credentials mismatch");
      }
    }    
    // Handle any database errors
    catch (error) {
        const resError: httpErrorModel = {
          code: 'SQL_ERROR',
          message: 'Error in database, not Authenticated',
          status: 500,
        };
        res.status(resError.status).json(resError);
        console.log("[server]: GET Failure, Database Error");
      }
});

module.exports = router;
