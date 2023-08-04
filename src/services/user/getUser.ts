import { Request, Response } from "express";
import { getRequest } from "../../utils/getRequest";
import { prisma } from "../../database/database";
import { shouldNumber } from "../../utils/shouldNumber";

const includeAllInformation = {
    bookmarks: true,
    give_hotel_feedbacks: true,
    give_room_feedbacks: true,
    partnerships: true,
    reservations: true,
    user_type: true
};

export async function getAllUsers(req: Request, res: Response) {
    getRequest({
        res,
        error: { status: 500, message: "Internal Server Error" },
        promise: prisma.user.findMany({
            include: includeAllInformation
        }),
    });
}

export async function getUserById(req: Request, res: Response) {
    const { id } = req.params;

    if (shouldNumber(id, res)) {
        getRequest({
            res,
            error: { status: 500, message: "Internal Server Error" },
            promise: prisma.user.findUnique({ 
                where: { id_user: +id }, 
                include: includeAllInformation
            })
        });
    }
}