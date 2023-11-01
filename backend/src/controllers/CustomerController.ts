//TODO, flytta skit
import Express, { NextFunction, Request, Response } from "express";
import { executeQuery } from "../databaseHandler/db.query";
import { CustomerModel } from "../models/customer";

export const checkIfUserExists = async (req: Request, res: Response, next:NextFunction) => {
    const customer:CustomerModel = req.body; //Adds body to customer interface

    const query = "SELECT * FROM CUSTOMERS WHERE USERNAME = ?"; //Defining query to check if username already exists, TODO, add more checks
    const result:CustomerModel = await executeQuery(query, [customer.username]); //Async execution of query
    
    if ( result.username != null || result.username != undefined) { // Checks if returned username is null or undefined I.E doesnt exist
        console.log("[server]: User already exists");
        res.status(409).send({
            error: {
              code: 'USER_ALREADY_EXISTS',
              message: 'User already exists',
            },
          });
    }   
    else {
        next();
    }
}