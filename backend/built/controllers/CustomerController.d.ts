import { NextFunction, Request, Response } from "express";
export declare function checkIfUserExists(req: Request, res: Response, next: NextFunction): Promise<void>;
