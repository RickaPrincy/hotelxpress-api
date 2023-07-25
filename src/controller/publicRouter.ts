import { getAllLocation } from "../database/crud/getAllLocation";
import { Router } from "express";
import { insertUser } from "../database/crud/userDAO";
import { authentificate } from "../security/authentificate";

export const publicRouter = Router();

publicRouter.get("/location",getAllLocation)
publicRouter.post("/signup",insertUser);
publicRouter.post("/signin",authentificate);

