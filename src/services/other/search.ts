import { QueryResult } from "pg";
import { pool } from "../../database/database";
import { readQuery } from "../../utils/readQuery";
import { isNoError } from "../../utils/isNoError";
import { Request, Response } from "express";

export function getLocationAndRoomType(req: Request, res: Response) {
    const data : any = {
        locations: [],
        room_types: []
    };
    
    pool.query(readQuery("/api/other/room_type"),(err:Error, resu:QueryResult)=>{
        if(isNoError({status: 500, message: "Internal server error"},res, err)){
            data.room_types = resu.rows; 
            pool.query(readQuery("api/other/state"),(error, result)=>{
                if(isNoError({status: 500, message: "Internal server error"},res, error)){
                    data.locations= result.rows;
                    res.send(data);
                }
            });
        }
    });
}