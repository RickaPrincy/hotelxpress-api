import { Request, Response } from "express";
import { getRequest } from "../../utils/getRequest";

export function getRoomById(req: Request, res: Response) {
    const { id } = req.params;

    getRequest({
        path: "api/room/get_id",
        res: res,
        valueRequest: [ +id ]
    });
}