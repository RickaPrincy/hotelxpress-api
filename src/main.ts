import { prisma } from "./database/database";
import * as dotenv from "dotenv";
import { app } from "./server";

dotenv.config();
const port = +process.env.__SERVER_PORT! || 5000;

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