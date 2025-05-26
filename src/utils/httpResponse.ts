import { Request, Response } from "express";
import { HttpResponse } from "../types/type";

export default (
    req:Request, 
    res:Response, 
    responseStatusCode:number,
    responseMessage:string,
    data:unknown = null,
): void =>{

    const response :HttpResponse = {
        success:true,
        statusCode:responseStatusCode,
        message:responseMessage,
        data:data
    }

    res.status(responseStatusCode).json(response)
}