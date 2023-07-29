import { Router } from "express";
import { getAllUsers } from "../services/user/getAllUsers";

export const privateRouter = Router();

privateRouter.get("/users", getAllUsers);