import { Request, Response } from "express";
import { getRequest } from "../../utils/getRequest";
import { prisma } from "../../database/database";
import { shouldNumber } from "../../utils/shouldNumber";

export async function getAllHotels(req: Request, res: Response) {
    getRequest({
        res,
        error: { message: "Iternal Server Error", status: 500 },
        promise: prisma.hotel.findMany({
            include: {
                resto: true
            }
        })
    });
}


export async function getHotelById(req: Request, res: Response) {
    const { id } = req.params;
    if (shouldNumber(id, res)) {
        getRequest({
            res,
            error: { message: "Iternal Server Error", status: 500 },
            promise: prisma.hotel.findMany({
                where: {
                    id_hotel: +id
                },
                include: {
                    resto: true
                }
            })
        });
    }
}