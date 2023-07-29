import * as jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import * as dotenv from "dotenv";
import { pool } from "../database/database";
import { readQuery } from "../utils/readQuery";
import { UserType } from "./token";

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

            const { email, password } = user as UserType;

            pool.query(readQuery("api/user/g_email_password"),[ email,password ], (error, response)=>{
                if(error)
                    res.status(400).send({ message: "Wrong authentification"});
                else if(response.rows.length === 0)
                    res.status(404).send({ message: "User not found"});
                else{
                    req.body = response.rows[0];
                    next();
                }
            });
        });
    }
    else {
        return res.status(403).send({ message: "authentification needed" });
    }
}