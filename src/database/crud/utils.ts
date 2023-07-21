import * as fs from "fs";

export type QueryType = "basic" | "hard" | "medium" | "auth";

/**
 * Reads and retrieves a SQL query from a file based 
 * on the provided QueryType and number.
 * @param type - The type of the query, one of "basic", "hard", "medium" or "auth".
 * @param number - The number associated with the query to be retrieved.
 * @returns The SQL query as a string, or an empty string if the file doesn't exist.
 */
export function readQuery(type:QueryType, number: number): string{
    const path = `src/database/crud/queries/${type}/${type}${number}.sql`;
    
    if(fs.existsSync(path)){
        let query = fs.readFileSync(path,"utf-8");

        while(query.startsWith("--") || query.startsWith("\n")){
            query = query.slice(query.indexOf("\n") + 1);
        }
        
        return query;
    }
    return ""
}