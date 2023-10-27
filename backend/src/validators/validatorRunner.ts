import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";


export function runValidator(
    req: Request,
    res: Response,
    next: NextFunction
    ) 
{
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(500).send({ errors });
    }
    next();
}