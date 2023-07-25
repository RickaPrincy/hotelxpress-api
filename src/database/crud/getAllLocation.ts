import { pool } from "../connection/database";
import { readQuery } from "../../utils/readQuery";
import { QueryResult } from "pg";
import { Request, Response } from "express";


export function getAllLocation(req: Request, res: Response) {
    if (req.body) {
        pool.query(readQuery("other", 3), (error: Error, response: QueryResult) => {
            if (error) {
                console.log(error);
                res.status(400).send({ message: "something went wrong" })
            } else {
                res.send({ locations: response.rows });
            }
        }
        )
    }
    else {
        res.status(400).send({ message: "something went wrong" })
    }
}