import { getRequest } from "../../utils/getRequest";
import { Request, Response } from "express";

export function getAllUsers(req: Request, res: Response) {
    getRequest({
        path: "api/user/all",
        res: res,
        valueRequest: []
    });
};