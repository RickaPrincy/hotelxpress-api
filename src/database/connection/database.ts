import * as dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

export  const pool = new Pool({
    user: process.env.__DB_USER || "postgres",
    host: "localhost",
    database: "hotelxpress",
    password: process.env.__DB_PASSWORD || "12345678",
    port: +process.env.__DB_PORT! || 5432 
});
