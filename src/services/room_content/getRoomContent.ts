import { Request, Response } from "express";
import { getRequest } from "../../utils/getRequest";
import { prisma } from "../../database/database";

export async function getAllRoomContents(req:Request, res:Response) {
    getRequest({
        res,
        error: {message: "Iternal Server Error", status: 500},
        promise: prisma.roomContent.findMany()
    });
}

export async function getRoomContentIlike(req:Request, res:Response) {
    const { ilike }= req.params;

    getRequest({
        res,
        error: {message: "Iternal Server Error", status: 500},
        promise: prisma.roomContent.findMany({
            where:{
                content_name: {
                    startsWith:ilike,
                    mode: "insensitive" 
                }
            }
        })
    });
}