import { Request, Response } from "express";
import { prisma } from "../../database/database";
import { getRequest } from "../../utils/getRequest";
import { shouldNumber } from "../../utils/shouldNumber";

export async function getReservations(req: Request, res: Response) {
    getRequest({
        res,
        promise: prisma.reservation.findMany({
            orderBy: {
                date_reservation: "desc"
            }, include: { user: true, reservation_contain: { include: { room: { include: { hotel: true } } } } }
        }),
        error: { status: 500, message: "Internal server error" }
    });
}


export async function getReservationsUser(req: Request, res: Response) {
    const { id } = req.params;
    if (shouldNumber(id, res)) {
        getRequest({
            res,
            promise: prisma.reservation.findMany({
                orderBy: {
                    date_reservation: "desc"
                },
                include: { user: true, reservation_contain: { include: { room: { include: { hotel: true } } } } },
                where: { id_user: +id }
            }),
            error: { status: 500, message: "Internal server error" }
        });
    }
}