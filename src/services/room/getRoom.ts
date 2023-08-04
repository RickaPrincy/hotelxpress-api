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
    },
    room_type: true,
    room_contents: true
}

export async function getAllRooms(req: Request, res: Response) {
    const { limit } = req.params;
    const limitBody: Limit = (limit && !Number.isNaN(+limit)) ? +limit : undefined;

    getRequest({
        res,
        error: { message: "Iternal Server Error", status: 500 },
        promise: prisma.room.findMany({
            include: includeHotels,
            orderBy: {
                reservation_contains: {
                    _count: "desc"
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

export async function getRoomByOptions(req: Request, res: Response) {
    const { id_options, arrival, departure, id_room_type, location } = req.body;

    const state = location ? { state: location } : {}
    const room_type = id_room_type ? id_room_type : undefined
    let reservation_founds: { id_reservation: number }[] = [];

    try {
        try {
            if (arrival && departure) {
                reservation_founds = await prisma.reservation.findMany({
                    where: {
                        AND: [
                            { arrival: { lte: departure } },
                            { departure: { gte: arrival } }
                        ]
                    },
                    select: {
                        id_reservation: true
                    }
                })
            }
        }
        catch (error) {
            console.log(error);
            res.send({ message: "Bad Request" });
            return;
        }

        let rooms = await prisma.room.findMany({
            where: {
                hotel: state,
                id_room_type: room_type,
                reservation_contains: {
                    every: {
                        id_reservation: { notIn: reservation_founds.map(el => el.id_reservation) }
                    }
                }
            },
            include: includeHotels,
        });

        if (id_options && Array.isArray(id_options)) {
            rooms = rooms.filter(el => {
                if (id_options)
                    for (let id of id_options) {
                        if (el.room_contents.map(el => el.id_room_content).indexOf(id) === -1)
                            return false;
                    }
                return true;
            });
        }
        res.send(rooms);
    }
    catch (error) {
        res.status(500).send({ message: "Bad request" })
    }
}