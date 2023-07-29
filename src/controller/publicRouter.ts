import { Router } from "express";
import { getAllRooms } from "../services/room/getAllRooms";
import { signin } from "../services/signin";
import { signup } from "../services/signup";

export const publicRouter = Router();

publicRouter.get("/rooms", getAllRooms);
publicRouter.post("/signin",signin);
publicRouter.post("/signup", signup);