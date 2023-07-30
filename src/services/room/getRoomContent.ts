import { Request, Response } from "express";
import { getRequest } from "../../utils/getRequest";

export function getAllRoomContent(req: Request, res: Response) {
    getRequest({
        path: "api/room_content/all",
        res: res,
        valueRequest: []
    });
};

export function getRoomContentIlike(req: Request, res: Response) {
    const { content_name } = req.params;

    getRequest({
        path: "api/room_content/get_ilike",
        res: res,
        valueRequest: [content_name + "%"]
    });
};