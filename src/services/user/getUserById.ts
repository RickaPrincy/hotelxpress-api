import { Request, Response } from "express";
import { getRequest } from "../../utils/getRequest";

export function getUserById(req: Request, res: Response) {
    const { id } = req.params;

    getRequest({
        path: "api/user/get_id",
        res: res,
        valueRequest: [ +id ]
    });
}