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
    room_contents:true
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

    const room_contents = id_options ?
        {
            some: {
                id_room_content: {
                    in: id_options
                }
            }
        } : {}
        
    const room_contains = await prisma.room.findMany({
        where: {
            room_contents: room_contents
        }
    });

    if(arrival && departure){

    }

    const state = location ? { state: location } : {}
    const room_type = id_room_type ? id_room_type : undefined

    try {
        const rooms = await prisma.room.findMany({
            where: {
                room_contents: room_contents,
                hotel: state,
                id_room_type: room_type
            },
            include: includeHotels
        });
        res.send(rooms);
    }
    catch (error) {
        res.status(400).send({ message: "Bad request" });
    }

    // getRequest({
    //     res,
    //     error: { message: "Iternal Server Error", status: 500 },
    //     promise: prisma.room.findMany({
    //         where: {
    //             id_room_type: id_room_type || undefined,
    //             hotel: {
    //                 city: location || undefined
    //             },
    //             room_contents: {
    //                 some: {
    //                     id_room_content: {
    //                         in: id_options
    //                     }
    //                 }
    //             }
    //         }
    //     })
    // })
}

