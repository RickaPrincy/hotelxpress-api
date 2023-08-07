import { Request, Response } from "express";
import { prisma } from "../../database/database";

export async function addReservation(req: Request, res: Response) {
    try {
        const { id_user, id_room, departure, arrival } = req.body;
        const newReservation = await prisma.reservation.create({
            data: { arrival, departure, id_user }
        });
        
        try {
            await prisma.reservationContain.create({
                data: { id_room, id_reservation: newReservation.id_reservation }
            });
            res.send({message :"Reservation créer"});
        } catch (error) {
            await prisma.reservation.delete({
                where: { id_reservation: newReservation.id_reservation }
            });
            console.log(error);
            res.status(400).send({ messsage: "Bad Request" });
        }

    } catch (error) {
        console.log(error);
        res.status(400).send({ messsage: "Bad Request" });
    }
}
