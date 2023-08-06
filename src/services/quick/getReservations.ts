import { Request, Response } from "express";
import { prisma } from "../../database/database";
import { getRequest } from "../../utils/getRequest";

export async function getReservations(req: Request, res: Response) {
    getRequest({
        res,
        promise: prisma.reservation.findMany({
            orderBy:{
                date_reservation: "desc"
            },include: {user:true}
        }),
        error: {status: 500, message :"Internal server error"}
    });
}