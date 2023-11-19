//TODO, flytta saker hit
import Express, { NextFunction, Request, Response } from "express";
import { executeGETQuery } from "../databaseHandler/db.query";
import { httpErrorModel } from "../models/error";
import { CustomerModel } from "../models/customer";

export async function checkIfUserExists(req: Request, res: Response, next: NextFunction) {
    var customer: CustomerModel = req.body; // Adds body to customer interface
    const query = "SELECT * FROM CUSTOMERS WHERE username = ?";
    try {
      console.log("awaiting executeGETQuery with: ", query, customer.username);
      const resultOfQuery = await executeGETQuery(query, [customer.username]);
      console.log(resultOfQuery);
      
      if ( resultOfQuery.length > 0 ) {
        res.status(409).json({
          httpErrorModel: {
            code: 'USER_ALREADY_EXISTS',
            message: 'User already exists',
            status: 409,
          },
        });
      }
      else {
        next()
      }
    } catch(error) {
        console.log(error);       
    }
}     
