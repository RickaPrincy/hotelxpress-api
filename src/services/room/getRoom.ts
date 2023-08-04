import { Request, Response } from "express";
import { getRequest } from "../../utils/getRequest";
import { prisma } from "../../database/database";
import { shouldNumber } from "../../utils/shouldNumber";
import { Limit } from "../feedback/getHotelFeedback";

const includeHotels = {
    hotel: {
        select: {
            city: true,
            state: true
        }
    }
}

export async function getAllRooms(req: Request, res: Response) {
    const { limit } = req.params;
    const limitBody : Limit = (limit && !Number.isNaN(+limit)) ?  +limit : undefined;

    getRequest({
        res,
        error: { message: "Iternal Server Error", status: 500 },
        promise: prisma.room.findMany({
            include: includeHotels,
            orderBy: {
                reservation_contains:{
                    _count:"desc"
                }
            },
            take: limitBody || undefined
        })
    });
}

export async function getRoomById(req: Request, res: Response) {
    const { id } = req.params;

    if (shouldNumber(id, res)) {
        getRequest({
            res,
            error: { message: "Iternal Server Error", status: 500 },
            promise: prisma.room.findMany({
                where: {
                    id_room: +id
                },
                include: includeHotels
            })
        });
    }
}