import { Request, Response } from "express";
import { getRequest } from "../../utils/getRequest";
import { prisma } from "../../database/database";
import { shouldNumber } from "../../utils/shouldNumber";

export type Limit = number | undefined;


export async function getAllHotelFeedbacks(req: Request, res: Response) {
    const { limit } = req.params;

    const limitBody : Limit = (limit && !Number.isNaN(+limit)) ?  +limit : undefined;

    getRequest({
        res,
        error: { message: "Iternal Server Error", status: 500 },
        promise: prisma.giveHotelFeedback.findMany({
            include:{
                user: {
                    select: {
                        first_name: true,
                        profil_url_img: true
                    }
                }
            },
            orderBy:{
                note: "desc"
            },
            take: limitBody
        })
    });
}