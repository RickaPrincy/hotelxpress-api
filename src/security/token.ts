import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

//dotenv configuration 
dotenv.config();

//necessary type for the generateAccessToken
type UserType ={
    username: string,
    password: string
}

//-------------------------------------------
function generateToken(payload: UserType) {
    return jwt.sign(payload, process.env.__TOKEN!, {});
}

export default generateToken;