import { Request, Response } from "express";
import { getRequest } from "../../utils/getRequest";
import { prisma } from "../../database/database";
import { shouldNumber } from "../../utils/shouldNumber";

export async function getAllRooms(req: Request, res: Response) {
    getRequest({
        res,
        error: { message: "Iternal Server Error", status: 500 },
        promise: prisma.room.findMany()
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
                }
            })
        });
    }
}