import { Request, Response } from "express";
import { getRequest } from "../../utils/getRequest";
import { prisma } from "../../database/database";

export async function getAllUser(req:Request, res:Response) {
    getRequest({
        res,
        error: {status: 500, message: "Internal Server Error"},
        promise: prisma.user.findMany(),
    });
}