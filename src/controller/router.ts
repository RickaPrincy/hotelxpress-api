import { Request, Response, Router } from "express";
import { authentificate } from "../security/authentificate";
import { insertUser } from "../database/crud/userDAO";
import { upload } from "../utils/multer";

export const router = Router();

//-----------------------------------
router.post("/signup",insertUser);
router.post("/signin",authentificate);

router.get("/home",(req: Request, res: Response)=>{
    res.send("private data here");
});


router.post("/file", upload.single("imageAdd"), (req:Request, res:Response)=>{
    res.send({message: "ok"});
});