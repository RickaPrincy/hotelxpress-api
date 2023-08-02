import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import { User } from "../model/User";

//dotenv configuration 
dotenv.config();

//necessary type for the generateAccessToken
export type UserType = Pick<User,"email" | "password">

//-------------------------------------------
function generateToken(payload: UserType) {
    return jwt.sign(payload, process.env.__TOKEN!, { expiresIn: "24h" });
}

export default generateToken;