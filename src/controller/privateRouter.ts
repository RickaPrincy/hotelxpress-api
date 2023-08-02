import { Router } from "express";
import { getAllUsers, getUserById } from "../services/user/getUser";

export const privateRouter = Router();

privateRouter.get("/users",getAllUsers);
privateRouter.get("/user/:id", getUserById);