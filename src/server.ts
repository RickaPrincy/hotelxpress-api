import * as express from "express";
import * as dotenv from "dotenv";
import { privateRouter } from "./controller/privateRouter";
import { publicRouter } from "./controller/publicRouter";
import { json } from "express";
import { checkAuthentification } from "./security/checkAuthentification";
import * as cors from "cors";
import { prisma } from "./database/database";
import { utilsRouter } from "./controller/utilsRouter";

//server configuration
dotenv.config();
const app = express();
const port = +process.env.__SERVER_PORT! || 5000;

//all middleware
app.use(cors());
app.use(json());

//public routes
app.use("/public", express.static("./files/public"));
app.use(utilsRouter);
app.use(publicRouter);

//private routes
// app.use(checkAuthentification);
// app.use("/private", express.static("./files/private"));
// app.use(privateRouter);

async function main() {
    await prisma.$connect();

    app.listen(port, () => {
        console.log(`Your server is running, Check : http://localhost:${port}`);
    });
}

main()
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })
    .finally(() => {
        prisma.$disconnect();
    });