import { Request, Response } from "express"
import httpResponse from "../utils/httpResponse"
import responseMessage from "../constant/responseMessage";

export default (req:Request, res:Response) =>{
    try {
        httpResponse(req, res, 200, responseMessage.SUCCESS, data);
    } catch (error) {
        httpResponse(req, res, 500, responseMessage.ERROR)
        console.log("error", error);
    }
}