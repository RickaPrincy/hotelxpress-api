import { Request, Response } from "express";
import { getRequest } from "../../utils/getRequest";
import { prisma } from "../../database/database";

export async function getAllUserType(req:Request, res:Response) {
    getRequest({
        res,
        error: {message: "Iternal Server Error", status: 500},
        promise: prisma.userType.findMany()
    });
}