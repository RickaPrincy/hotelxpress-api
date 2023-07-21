import { Request, Response, Router } from "express";
import { authentificate } from "../security/authentificate";
import { insertUser } from "../database/crud/userCrud";
export const router = Router();

//-----------------------------------
router.post("/signup",insertUser);
router.post("/signin",authentificate);

router.get("/home",(req: Request, res: Response)=>{
    res.send("everything work perfectly");
});

