import { Response } from "express";

export type HandlerResponse= {
    message: string,
    status: number
}

export function isNoError( response: HandlerResponse , res: Response, error: Error): boolean{
    if(error){
        console.log(error);
        res.status(response.status).send({message: response.message});
        return false;
    }
    return true 
}