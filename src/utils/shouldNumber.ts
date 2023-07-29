import { Response } from "express";

export function shouldNumber(value:string, res: Response):boolean{
    if(Number.isNaN(+value)){
        res.status(404).send({message: "Not Found"});
        return false;
    }
    return true;
}