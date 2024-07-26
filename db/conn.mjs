import dotenv from "dotenv";
import {MongoClient} from "mongodb";

const dbName = "kpopSurvivalShowDB";

dotenv.config();

const client = new MongoClient(process.env.ATLAS_URI);

let conn;

try {
    conn = await client.connect(); 
}catch(e) {
    console.log(e);
}

let db = conn.db(dbName);

export default db;