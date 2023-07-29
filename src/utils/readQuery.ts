import * as fs from "fs";

/*
 * Reads and retrieves a SQL query from a givenPath 
 * @param path - path to the query to be retrieved.
 * @returns The SQL query as a string, or an empty string if the file doesn't exist.
 */
export function readQuery(path: string): string{
    const pathToFile= `database/queries/${path}.sql`;
    
    if(fs.existsSync(pathToFile)){
        let query = fs.readFileSync(pathToFile,"utf-8");

        while(query.startsWith("--") || query.startsWith("\n")){
            query = query.slice(query.indexOf("\n") + 1);
        }
        
        return query;
    }
    return "";
}