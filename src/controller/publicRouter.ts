import { Router } from "express";
import { signin } from "../services/signin";
import { signup } from "../services/signup";
import { getAllUser } from "../services/user/getUser";

export const publicRouter = Router();

publicRouter.get("/users",getAllUser);
publicRouter.post("/signin",signin);
publicRouter.post("/signup",signup);

