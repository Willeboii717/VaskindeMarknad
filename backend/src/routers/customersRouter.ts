import express, {Request, Response} from "express";
const router = express.Router();
//Database
import { executeQuery } from "../databaseHandler/db.query";
//Interfaces
import { CustomerModel, loginCredentialModel } from '../models/customer';
//Validators
import { createCustomerValidator, loginValidator } from '../validators/customerValidator';
import { runValidator } from "../validators/validatorRunner";
//Controllers
import { checkIfUserExists } from "../controllers/CustomerController";




// GET: Retrieve a list of all customers
router.get('/getCustomers', async (req, res) => {
  const query = await executeQuery("SELECT * FROM customers");

  const Customer:CustomerModel[] = query;
  if (Customer.length > 0) {
    res.send(Customer);
  }
  else {
    console.log("Error, could not get Customers")
  }
});

//Get specific customer by ID
router.get("/customers/:id", async (req, res) => {
  const customerId = req.params.id;
  const query = await executeQuery
    ("SELECT * FROM customers WHERE id = ?", [customerId]);  
  const customer: CustomerModel = query;

  if ( customer.id != null ) {
    res.send(customer);
  }
  else {
    res.status(404).send("Error, customer with that ID is not found");  
  }
});



router.post('/createCustomer',
  createCustomerValidator, //determines what should be validated
  runValidator, // runs validator on body
  checkIfUserExists, //Checks if users exists
  async (req: Request, res: Response) => {
    console.log("[server]: entering Post, createCustomer");
  //Placing body in customer interface
  const customer:CustomerModel = req.body;
  try {
    // Defining query to insert a customer
    const query = 'INSERT INTO customers (username, email, firstname, lastname, password) VALUES (?, ?, ?, ?, ?)';
    // Execute the query with parameters
    await executeQuery(query, [customer.username, customer.email, customer.firstname, customer.lastname, customer.password]);

    // If the insertion is successful, return a success message
    res.status(201).send({msg: "Customer Created Successfully"});
    console.log("[server]: Post Success, Customer Created");
  } 
  // Handle any database errors
  catch (error) {
    res.status(500).send({msg: "Error creating customer"});
    console.log("[server]: Post Failure, Database Error");
  }
});


router.post('/loginCustomer',
  //add runValidator, and validator itself
  async (req: Request, res: Response) => {
    console.log("[server]: entering Post, loginCustomer");
    const frontEndDataCustomer:loginCredentialModel = req.body;
    try {
      //Query definition
      const query = 'SELECT * FROM CUSTOMERS WHERE USERNAME = ? AND PASSWORD = ?';
      //Exe Query
      const resultOfQuery:CustomerModel = await executeQuery(query, [frontEndDataCustomer.username, frontEndDataCustomer.password])
      console.log(resultOfQuery);
      
      //If successful find of customer, return
      if (resultOfQuery != null) {
        res.status(201).send({msg: "Customer Authenticated"});
        console.log("[server]: Post Success, Customer Authenticated");
      }
    }    
    // Handle any database errors
    catch (error) {
      res.status(500).send({msg: "Error in database, not Authenticated"});
      console.log("[server]: Post Failure, ", error); //Denna borde catchas individuellt, och alla andra databas errors separat,
    }
});

module.exports = router;
