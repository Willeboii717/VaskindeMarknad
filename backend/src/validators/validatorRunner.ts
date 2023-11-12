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
        console.log("[server]: Post Failure,  Didn't pass validation");
        return res.status(400).send({msg: errors});
    }
    next();
}