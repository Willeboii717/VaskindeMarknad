//TODO, flytta saker hit
import Express, { NextFunction, Request, Response } from "express";
import { executeGetQuery } from "../databaseHandler/db.query";
import { httpErrorModel } from "../models/error";
import { CustomerModel } from "../models/customer";

export async function checkIfUserExists(req: Request, res: Response, next: NextFunction) {
  try {
    var customer: CustomerModel = req.body; // Adds body to customer interface
    const query = "SELECT * FROM CUSTOMERS WHERE username = ?";
    const resultOfQuery:CustomerModel = await executeGetQuery(query, [customer.username]);

    if (resultOfQuery.username != null ||resultOfQuery.username != undefined) {
      console.log("[server]: User already exists");
      res.status(409).json({
        error: {
          code: 'USER_ALREADY_EXISTS',
          message: 'User already exists',
          status: 409,
        },
      });
    } else {
      next()
    }
  } catch (error) {
    if (error == "NO_DATA") {
      console.log("No data");
      
    }
    const httperror: httpErrorModel = {
      code: 'INTERNAL_SERVER_ERROR',
      message: 'Internal server error',
      status: 500,
    };
    res.status(httperror.status).json(httperror);
  }
}