import { readQuery } from "./readQuery";
import { pool } from "../database/database";
import { QueryResult } from "pg";
import { isNoError } from "./isNoError";
import { Response } from "express";

export type DeleteRequestType = {
    id: number[],
    type: string,
    res: Response
}

export function deleteRequest(options: DeleteRequestType) {
    const { res, type, id } = options;

    pool.query(readQuery(`api/${type}/delete`), id,
        (er: Error, rs: QueryResult) => {
            if (isNoError({ message: "Internal server error", status: 500 }, res, er)) {
                pool.query(readQuery(`api/${type}/get_id`),[id],(error: Error, result: QueryResult)=>{
                    if(isNoError({ message: "Delete failed",status: 500 }, res,error)){
                        if(result.rows.length !== 0)
                            res.status(500).send({message: "Delete Failed"});
                        else   
                            res.send({message: `${type} Deleted`});
                    }
                });
            }
        }
    );
}