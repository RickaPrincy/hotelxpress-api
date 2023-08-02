import { Request, Response } from "express";
import { prisma } from "../../database/database";

type SearchResult = {
    locations: string[],
    room_types: {
        id_room_type: number,
        type: string
    }[]
}

export async function getSearch(req: Request, res: Response) {
    const data: SearchResult = {
        locations: [],
        room_types: []
    };
    
    try {
        data.locations = (await prisma.hotel.findMany()).map(el => el.state);
        data.room_types = await prisma.roomType.findMany();
        res.send(data);
    }
    catch(error){
        res.status(500).send({message: "Internal Server error"});
    };
}