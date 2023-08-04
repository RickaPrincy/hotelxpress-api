import { Request, Response } from "express";
import { prisma } from "../../database/database";
import { shouldNumber } from "../../utils/shouldNumber";
import { includeAllInformation } from "./getUser";

export async function updateUser(req: Request, res: Response) {
    const filename = req.file?.filename;
    const { id } = req.params;

    if (shouldNumber(id, res)) {
        try {
            const userUpdated = await prisma.user.update({
                data: {
                    first_name: req.body.first_name || undefined,
                    last_name: req.body.last_name || undefined,
                    profil_url_img: filename ? `http://localhost:5000/public/${filename}` : undefined,
                    gender: req.body.gender || undefined,
                    password: req.body.password || undefined,
                    email: req.body.email || undefined,
                    phone_number: req.body.phone_number || undefined
                },
                where: {
                    id_user: +id
                },
                include: includeAllInformation
            });

            res.send(userUpdated);
        }
        catch (error) {
            res.status(400).send({ message: "Bad request" });
        }
    }
}