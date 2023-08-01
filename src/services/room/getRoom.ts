import { Request, Response } from "express";
import { getRequest } from "../../utils/getRequest";
import { shouldNumber } from "../../utils/shouldNumber";
import { isNoError } from "../../utils/isNoError";
import { pool } from "../../database/database";

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
        res: res,
        valueRequest: [location, arrival, departure]
    });
}


export function getRoomByOptions(req: Request, res: Response) {
    const { location, arrival, departure, id_room_type, id_options } = req.body;
    let addQuery = "";

    if (id_options && id_options.length !== 0) {
        addQuery = `
            AND "room"."id_room" IN (
            SELECT "room_contain"."id_room"
            FROM "room_contain"
            WHERE "room_contain"."id_room_content"
            IN (
                SELECT "room_contain"."id_room" FROM "room_contain"
                WHERE "room_contain"."id_room_content" IN (${id_options.join(",")})
                GROUP BY "room_contain"."id_room"
                HAVING COUNT("room_contain"."id_room") = ${id_options.length}
            )
        );`
    }

    getRequest({
        path: "api/room/get_options",
        res: res,
        valueRequest: [location, arrival, departure, id_room_type],
        addQuery: addQuery || ";" 
    });
}
