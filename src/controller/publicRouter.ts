import { getAllLocation } from "../database/crud/getAllLocation";
import { Router } from "express";
import { insertUser } from "../database/crud/userDAO";
import { authentificate } from "../security/authentificate";
import { getAllRooms} from "../database/crud/getAllRoom";

export const publicRouter = Router();

publicRouter.get("/location",getAllLocation);
publicRouter.get("/rooms", getAllRooms);
publicRouter.post("/signup",insertUser);
publicRouter.post("/signin",authentificate);

