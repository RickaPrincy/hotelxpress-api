import { Request, Response, Router } from "express";
export const router = Router();

//-----------------------------------
router.get("/",(req: Request, res: Response)=>{
    res.send("everything work perfectly");
});