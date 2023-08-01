import { readQuery } from "./readQuery";
import { pool } from "../database/database";
import { QueryResult } from "pg";
import { Response } from "express";
import { isNoError } from "./isNoError";

export type GetRequestType = {
    path: string,
    res: Response,
    valueRequest: (string | number)[]
    notAcceptNull?: boolean,
    addQuery?: string
};

export function getRequest(options: GetRequestType) {
    const { res, valueRequest, notAcceptNull, path, addQuery } = options;

    const query = readQuery(`${path}`) + (addQuery ? addQuery : "");
    
    pool.query(query, valueRequest,
        (err: Error, result: QueryResult) => {
            if (isNoError({ message: "Internal server error", status: 500 }, res, err)) {
                if (notAcceptNull && result.rows.length === 0)
                    res.status(404).send("Not Found");
                else
                    res.send(result.rows);
            }
        }
    );
}