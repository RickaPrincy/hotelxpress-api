import * as jwt from "jsonwebtoken";
import generateToken from "./token";
import { NextFunction, Request, Response } from "express";
import * as dotenv from "dotenv";
import { pool } from "../database/connection/database";
import { readQuery } from "../utils/readQuery";
import { QueryResult } from "pg";

dotenv.config();

/**
 * Verifies the authenticity of the token before redirecting to an endpoint.
 * If the token is valid, the function proceeds to the next middleware or route handler.
 * If the token is invalid or missing, it returns a 403 (Forbidden) or 500 (Internal Server Error) status accordingly.
 *
 * @param req - The HTTP request object
 * @param res - The HTTP response object used to send the authentication status.
 * @param next - The callback function to call the next middleware or route handler if the token is valid.
 */
export function checkAuthentification(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers["authorization"];
    const token = authHeader?.split(" ")[1];

    if (token) {
        // eslint-disable-next-line
        jwt.verify(token, process.env.__TOKEN!, (err, user) => {
            if (err)
                return res.status(403).send({ message: "Token not valid" });
            next();
        });
    }
    else {
        return res.status(403).send({ message: "authentification needed" });
    }
}

/**
 * Verifies authentication using the provided username and password.
 * If authentication succeeds, returns a JSON Web Token (JWT) and the user ID.
 * If authentication fails, sends a 401 (Unauthorized) or 500 (Internal Server Error) status.
 *
 * @param req - The HTTP request object containing the authentication data in the body (req.body).
 * @param res - The HTTP response object used to send the authentication response.
 * @returns Nothing directly, but sends a JSON response containing the JWT token and user ID upon successful authentication.
 */
export function authentificate(req: Request, res: Response) {
    if (req.body) {
        const {email, password } = req.body;

        pool.query(readQuery("other", 1), [email, password], (error: Error, response: QueryResult) => {
            if (error)
                res.status(401).send({ message: "authentification failed" });
            else if (response.rows.length === 0)
                res.status(401).send({ message: "authentification failed" });
            else {
                const token = generateToken({ email: email, password: password });
                const id = response.rows[0].id_user;
                res.send({ token: "Bearer " + token, user_id: id });
            }
        });
    }else{
        res.status(401).send({ message: "authentification failed" });
    }
}