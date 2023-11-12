//TODO, flytta saker hit
import Express, { NextFunction, Request, Response } from "express";
import { executeGetQuery } from "../databaseHandler/db.query";
import { CustomerModel } from "../models/customer";

export const checkIfUserExists = async (req: Request, res: Response, next:NextFunction) => {
  var customer:CustomerModel = req.body; //Adds body to customer interface
  console.log("Checkpoint 1");
  
  

  const query = "SELECT * FROM CUSTOMERS WHERE username = ?"; //Defining query to check if username already exists, TODO, add more checks
  try {
    const resultOfQuery = await executeGetQuery(query, [customer.username]); //Async execution of query
    if ( resultOfQuery.username != null && resultOfQuery.username != undefined) { // Checks if returned username is null or undefined I.E doesnt exist
      console.log("[server]: User already exists");
      res.status(409).send({
          error: {
            code: 'USER_ALREADY_EXISTS',
            message: 'User already exists',
          },
        })
    }
  }  
      catch (error) {
        console.log(customer, error);
        
        }

};