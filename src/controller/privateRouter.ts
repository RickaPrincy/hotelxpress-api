import { Router } from "express";
import { getAllUsers, getUserById } from "../services/user/getUser";
import { updateUser } from "../services/user/updateUser";
import { upload } from "../utils/multer";

export const privateRouter = Router();

privateRouter.get("/users",getAllUsers);
privateRouter.get("/user/:id", getUserById);

privateRouter.put("/upload/user/:id", upload.single("profil_url_img"),updateUser);