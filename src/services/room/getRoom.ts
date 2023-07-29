import { Request, Response } from "express";
import { getRequest } from "../../utils/getRequest";
import { shouldNumber } from "../../utils/shouldNumber";

export function getAllRooms(req: Request, res: Response) {
    getRequest({
        path: "api/room/all",
        res: res,
        valueRequest: []
    });
};

export function getRoomById(req: Request, res: Response) {
    const { id } = req.params;
    if (shouldNumber(id, res)) {
        getRequest({
            path: "api/room/get_id",
            res: res,
            valueRequest: [+id]
        });
    }
}

export function getRoomByIntervalAndLocation(req: Request, res: Response) {
    const { location, arrival, departure } = req.body;

    getRequest({
        path: "api/room/get_interval_location",
        res:res,
        valueRequest: [ location, arrival, departure]
    });
}