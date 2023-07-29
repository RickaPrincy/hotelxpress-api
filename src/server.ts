import * as express from "express";
import * as dotenv from "dotenv";
import { privateRouter } from "./controller/privateRouter";
import { publicRouter } from "./controller/publicRouter";
import { json } from "express";
import { checkAuthentification } from "./security/checkAuthentification"; 
import * as cors from "cors";

//server configuration
dotenv.config();
const app = express();
const port = +process.env.__SERVER_PORT! || 5000; 

//all middleware
app.use(cors());
app.use(json());

//public routes
app.use("/public",express.static("./files/public"));
app.use(publicRouter);

//private routes
app.use(checkAuthentification);
app.use("/private",express.static("./files/private"));
app.use(privateRouter);

//server launched
app.listen(port, ()=>{
    console.log(`App launching on : http://localhost:${port}`);
});