import * as jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import * as dotenv from "dotenv";
import { UserType } from "./token";
import { prisma } from "../database/database";
import { includeAllInformation } from "../services/user/getUser";

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
    const token = req.headers["authorization"];

    if (token) {
        // eslint-disable-next-line
        jwt.verify(token, process.env.__TOKEN!, async (err, user) => {
            if (err)
                return res.status(403).send({ message: "Token not valid" });

            const { email, password } = user as UserType;
            const userFound = await prisma.user.findUnique({
                where: { email, password }, include: includeAllInformation
            });

            if (userFound) {
                req.body = userFound;
                if (req.url === "/find/user") 
                    res.send(userFound);
                else 
                    next();
            }
            else {
                res.status(404).send({ message: "User not found" });
            }
        });
    }
    else {
        res.status(403).send({ message: "authentification needed" });
    }
}