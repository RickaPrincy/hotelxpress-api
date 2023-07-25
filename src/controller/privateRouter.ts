import { Request, Response, Router} from "express";
import { upload } from "../utils/multer";

export const privateRouter = Router();

//-----------------------------------
privateRouter.get("/home",(req: Request, res: Response)=>{
    res.send("private data here");
});

privateRouter.post("/file", upload.single("imageAdd"), (req:Request, res:Response)=>{
    res.send({message: "ok"});
});