import { QueryResult } from "pg";
import { pool } from "./database/connection/database";
import { readQuery } from "./database/crud/utils";

pool.query(readQuery("basic",3),[2],(err: Error,res: QueryResult)=>{
    if(err){
        console.log(err.message); 
    }
    console.log(res.rows);
});