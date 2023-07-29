import { Request, Response } from "express";
import { getRequest } from "../../utils/getRequest";

export function getAllRooms(req: Request, res: Response) {
    getRequest({
        path: "api/room/all",
        res: res,
        valueRequest: []
    });
};