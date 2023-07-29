import { Request, Response } from "express";
import { pool } from "../database/database";
import { readQuery } from "../utils/readQuery";
import { QueryResult } from "pg";
import { isNoError } from "../utils/isNoError";

export function signup(req: Request, res: Response) {
    pool.query(
        readQuery("api/user/add"),
        [
            req.body.first_name,
            req.body.last_name || null,
            req.body.gender || null,
            req.body.email,
            req.body.phone_number,
            req.body.profil_url_img || null,
            req.body.nationality || null,
            req.body.birthdate || null,
            req.body.password,
            req.body.user_type,
        ],
        (error: Error, response: QueryResult) => {
            if (isNoError({ message: "Signup failed", status: 401 }, res, error))
                res.send({ user: "user added" });
        }
    )
} 