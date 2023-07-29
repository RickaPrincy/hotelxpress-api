import { Router } from "express";
import { getAllUsers } from "../services/user/getUser";

export const privateRouter = Router();

privateRouter.get("/users", getAllUsers);