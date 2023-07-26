import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import { User } from "../model/User";

//dotenv configuration 
dotenv.config();

//necessary type for the generateAccessToken
type UserType = Pick<User,"email" | "password">

//-------------------------------------------
function generateToken(payload: UserType) {
    return jwt.sign(payload, process.env.__TOKEN!, {});
}

export default generateToken;