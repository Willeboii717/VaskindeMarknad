//TODO, flytta saker hit
import Express, { NextFunction, Request, Response } from "express";
import { executeGetQuery } from "../databaseHandler/db.query";
import { CustomerModel } from "../models/customer";

export async function checkIfUserExists(req: Request, res: Response, next: NextFunction) {
  try {
    var customer: CustomerModel = req.body; // Adds body to customer interface
    console.log("Checkpoint in CheckIfUserExists");

    const query = "SELECT * FROM CUSTOMERS WHERE username = ?";
    const resultOfQuery:CustomerModel = await executeGetQuery(query, [customer.username]);

    if (resultOfQuery.username != null ||resultOfQuery.username != undefined) {
      console.log("[server]: User already exists");
      res.status(409).send({
        error: {
          code: 'USER_ALREADY_EXISTS',
          message: 'User already exists',
        },
      });
    } else {
      next()
    }
  } catch (error) {
    console.log(req.body, error);
    res.status(500).send({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Internal server error',
      },
    });
  }
}