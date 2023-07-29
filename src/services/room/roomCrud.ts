import { Request, Response } from "express";
import { deleteRequest } from "../../utils/deleteRequest";
import { shouldNumber } from "../../utils/shouldNumber";

export function deleteRoom(req: Request, res: Response) {
    const { id } = req.params;
    
    if (shouldNumber(id, res)){
        deleteRequest({
            id: [+id],
            res: res,
            type: "room"
        });
    }
}