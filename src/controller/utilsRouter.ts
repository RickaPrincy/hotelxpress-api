import { Router } from "express";
import { getAllUserType } from "../services/utils/utils";

export const utilsRouter = Router();

utilsRouter.get("/user_type",getAllUserType);