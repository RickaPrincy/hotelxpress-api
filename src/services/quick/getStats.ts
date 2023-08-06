import { Request, Response } from "express";
import { prisma } from "../../database/database";
import { Decimal } from "@prisma/client/runtime/library";

export async function getStats(req: Request, res: Response) {
    try {
        const userCount = await prisma.user.count();
        const roomCount= await prisma.room.count();
        const reservationsCount = await prisma.reservation.count();
        const hotelInformations = await prisma.hotel.findMany({
            include:{
                rooms: true
            }
        });
        const totalMoney = (await prisma.payment.findMany()).reduce((a,b)=>Decimal.sum(a,b.amount_paid), new Decimal("0"));
        res.send({
            userCount,
            hotelInformations,
            roomCount,
            totalMoney,
            reservationsCount
        });
    } catch (error) {
        res.status(400).send({message: "Bad request"}) 
    }
}