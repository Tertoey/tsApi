import { Request,Response,NextFunction } from "express";

export function logger (req:Request, res:Response, next:NextFunction):void {
    console.log(`Method: ${req.method}`);
    const time = new Date().toISOString();
    console.info(`Time: ${time}`);
    console.log("URL: %s", req.ip);
    console.log("originalUrl: %s", req.originalUrl);
    next();
}