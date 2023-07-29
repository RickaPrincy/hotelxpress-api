import { Request, Response } from "express";
import { getRequest } from "../../utils/getRequest";
import { shouldNumber } from "../../utils/shouldNumber";

export function getUserById(req: Request, res: Response) {
    const { id } = req.params;
    
    if (shouldNumber(id, res)) {
        getRequest({
            path: "api/user/get_id",
            res: res,
            valueRequest: [+id]
        });
    }
}

export function getAllUsers(req: Request, res: Response) {
    getRequest({
        path: "api/user/all",
        res: res,
        valueRequest: []
    });
};