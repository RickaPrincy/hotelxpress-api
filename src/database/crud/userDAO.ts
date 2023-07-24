import { Request, Response } from "express";
import { pool } from "../connection/database";
import { readQuery } from "../../utils/readQuery";
import { QueryResult } from "pg";

export function insertUser(req: Request, res: Response) {
    if (req.body) {
        pool.query(
            readQuery("other", 2),
            [
                req.body.id_user,
                req.body.first_name,
                req.body.last_name || null,
                req.body.gender || null,
                req.body.email,
                req.body.phone_number,
                req.body.profil_url_img || null,
                req.body.nationality || null,
                req.body.birthdate || null,
                req.body.password,
                req.body.user_type,
            ],
            (error: Error, response: QueryResult)=>{
                if(error){
                    console.log(error);
                    res.status(400).send({message: "Signup failed"})
                }else{
                    res.send({user: "user added"})
                }
            }
        )
    }
    else{
        res.status(400).send({message: "Signup failed"})
    }
}