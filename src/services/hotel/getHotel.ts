import { Request, Response } from "express";
import { getRequest } from "../../utils/getRequest";
import { shouldNumber } from "../../utils/shouldNumber";

export function getAllHotels(req: Request, res: Response) {
    getRequest({
        path: "api/hotel/all",
        res: res,
        valueRequest: []
    });
};

export function getHotelById(req: Request, res: Response) {
    const { id } = req.params;
    if (shouldNumber(id, res)) {
        getRequest({
            path: "api/hotel/get_id",
            res: res,
            valueRequest: [+id]
        });
    }
}