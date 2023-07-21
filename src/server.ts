import * as express from "express";
import * as dotenv from "dotenv";
import { router } from "./controller/router";
import { json } from "express";

//server configuration
dotenv.config();
const app = express();
const port = +process.env.__SERVER_PORT! || 5000; 

//all middleware
app.use(router);
app.use(json())
//server launched
app.listen(port, ()=>{
    console.log("App listening on port : " + port);
})