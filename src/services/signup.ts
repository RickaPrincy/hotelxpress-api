import { Request, Response } from "express";
import { prisma } from "../database/database";
import { keys } from "../security/keys";
import generateToken from "../security/token";
import { includeAllInformation } from "./user/getUser";
import * as dotenv from "dotenv";

dotenv.config();

export async function signup(req: Request, res: Response) {
    const { key } = req.body;
    let user_type = 1;

    if (key) {
        if (typeof key !== "string" || keys.indexOf(key) === -1) {
            res.status(401).send({ message: "key not valid" });
            return;
        }
        user_type = 2;
    }

    const defaultUrl = `http://localhost:${process.env.__SERVER_PORT}/public/default.png`;

    try {
        const newUser = await prisma.user.create({
            data: {
                first_name: req.body.first_name,
                last_name: req.body.last_name || null,
                gender: req.body.gender || null,
                email: req.body.email,
                phone_number: req.body.phone_number,
                profil_url_img: req.body.profil_url_img || defaultUrl,
                nationality: req.body.nationality || null,
                birthdate: req.body.birthdate || null,
                password: req.body.password,
                id_user_type: user_type,
            },
            include: includeAllInformation
        });
        res.send({
            new_user: newUser,
            token: generateToken({ email: newUser.email, password: newUser.password }),
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).send({ message: "signup failed" });
    }
} 