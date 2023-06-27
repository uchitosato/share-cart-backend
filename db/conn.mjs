import { MongoClient } from "mongodb";

const connectionString = process.env.MONGODB_URI || "mongodb://localhost:27017/test";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
  console.log("Database connected!!!");
} catch(e) {
  console.error(e);
}

let db = conn.db("test");

export default db;