import { Request, Response } from "express";
import { prisma } from "../../database/database";

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
        const totalMoney = await prisma.payment.aggregate({
            _sum: {
                amount_paid: true
            }
        })

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