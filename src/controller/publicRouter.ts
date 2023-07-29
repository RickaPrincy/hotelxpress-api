import { Router } from "express";
import { signin } from "../services/signin";
import { signup } from "../services/signup";
import { deleteUser } from "../services/user/userCrud";
import { getUserById } from "../services/user/getUser";
import { getAllRooms, getRoomById, getRoomByIntervalAndLocation } from "../services/room/getRooms";
import { deleteRoom } from "../services/room/roomCrud";

export const publicRouter = Router();

//Some endpoint are temporary public
publicRouter.delete("/delete/user/:id",deleteUser);
publicRouter.get("/find/room/interval", getRoomByIntervalAndLocation);
publicRouter.get("/user/:id",getUserById);
publicRouter.get("/room/:id",getRoomById);
publicRouter.get("/delete/room/:id",deleteRoom);


publicRouter.get("/rooms", getAllRooms);
publicRouter.post("/signin",signin);
publicRouter.post("/signup", signup);