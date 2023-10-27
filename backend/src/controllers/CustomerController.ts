//TODO, flytta skit
import Express, { NextFunction, Request, Response } from "express";
import { executeQuery } from "../databaseHandler/db.query";
import { Customer } from "../models/customer";

export const checkIfUserExists = async (req: Request, res: Response, next:NextFunction) => {
    const customer:Customer = req.body; //Adds body to customer interface

    const query = "SELECT * FROM CUSTOMERS WHERE USERNAME = ?"; //Defining query to check if username already exists, TODO, add more checks
    const result:Customer = await executeQuery(query, [customer.username]); //Async execution of query
    
    if ( result.username != null || result.username != undefined) { // Checks if returned username is null or undefined I.E doesnt exist
        res.status(500).send("User already exists");
    }   
    else {
        next();
    }
}