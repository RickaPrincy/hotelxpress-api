import { prisma } from "../database/database";
import generateToken from "../security/token";
import { Request, Response } from "express";

/**
 * Verifies authentication using the provided email and password.
 * If authentication succeeds, returns a JSON Web Token (JWT) and the user ID.
 * If authentication fails, sends a 401 (Unauthorized) or 500 (Internal Server Error) status.
 *
 * @param req - The HTTP request object containing the authentication data in the body (req.body).
 * @param res - The HTTP response object used to send the authentication response.
 * @returns Nothing directly, but sends a JSON response containing the JWT token and user ID upon successful authentication.
 */
export async function signin(req: Request, res: Response) {
    if (req.body && req.body.email && req.body.password) {

        const { email, password } = req.body;
        const userFound = await prisma.user.findUnique({
            where: { email, password }
        });

        if (!userFound)
            res.status(401).send({ message: "authentification failed" });
        else {
            const token = generateToken({ email: email, password: password });
            res.send({ token: "Bearer " + token, expiresIn: 3600 });
        }
    }
    else {
        res.status(401).send({ message: "authentification failed" });
    }
}