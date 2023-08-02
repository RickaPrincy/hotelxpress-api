import * as express from "express";
import { privateRouter } from "./controller/privateRouter";
import { publicRouter } from "./controller/publicRouter";
import { json } from "express";
import { checkAuthentification } from "./security/checkAuthentification";
import * as cors from "cors";

//server configuration
export const app = express();

//all middleware
app.use(cors());
app.use(json());

app.use("/public", express.static("./files/public"));
app.use(publicRouter);

//privats route
app.use(checkAuthentification);
app.use("/private", express.static("./files/private"));
app.use(privateRouter);