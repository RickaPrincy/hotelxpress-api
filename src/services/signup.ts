import { Request, Response } from "express";
import { prisma } from "../database/database";

export async function signup(req: Request, res: Response) {
    try {
        await prisma.user.create({
            data: {
                first_name: req.body.first_name,
                last_name: req.body.last_name || null,
                gender: req.body.gender || null,
                email: req.body.email,
                phone_number: req.body.phone_number,
                profil_url_img: req.body.profil_url_img || null,
                nationality: req.body.nationality || null,
                birthdate: req.body.birthdate || null,
                password: req.body.password,
                id_user_type: req.body.id_user_type,
            }
        });
        res.send({user: "user added"});
    }
    catch(error){
        console.log(error);
        res.status(400).send({ message: "signup failed"});
    }
} 