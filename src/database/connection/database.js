"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
var dotenv = require("dotenv");
var pg_1 = require("pg");
dotenv.config();
exports.pool = new pg_1.Pool({
    user: process.env.__DB_USER || "postgres",
    host: "localhost",
    database: "hotelxpress",
    password: process.env.__DB_PASSWORD || "12345678",
    port: +process.env.__DB_PORT || 5432
});
