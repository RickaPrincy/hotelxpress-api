import generateToken from "../security/token";
import { Request, Response } from "express";
import * as dotenv from "dotenv";
import { pool } from "../database/database";
import { readQuery } from "../utils/readQuery";
import { QueryResult } from "pg";

dotenv.config();

/**
 * Verifies authentication using the provided email and password.
 * If authentication succeeds, returns a JSON Web Token (JWT) and the user ID.
 * If authentication fails, sends a 401 (Unauthorized) or 500 (Internal Server Error) status.
 *
 * @param req - The HTTP request object containing the authentication data in the body (req.body).
 * @param res - The HTTP response object used to send the authentication response.
 * @returns Nothing directly, but sends a JSON response containing the JWT token and user ID upon successful authentication.
 */
export function signin(req: Request, res: Response) {
    if (req.body) {
        const {email, password } = req.body;

        pool.query(readQuery("api/user/g_email_password"), [email, password], (error: Error, response: QueryResult) => {
            if (error)
                res.status(401).send({ message: "authentification failed" });
            else if (response.rows.length === 0)
                res.status(401).send({ message: "authentification failed" });
            else {
                const token = generateToken({ email: email, password: password });
                res.send({ token: "Bearer " + token, expiresIn: 3600 });
            }
        });
    }else{
        res.status(401).send({ message: "authentification failed" });
    }
}