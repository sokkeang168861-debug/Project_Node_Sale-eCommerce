import { Db, MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

class Database {
    private static instance: Database;
    private client: MongoClient;
    private db!: Db;

    private constructor() {
        const uri = process.env.MONGO_URI as string;

        this.client = new MongoClient(uri);
    }

    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }

        return Database.instance;
    }

    public async connect(): Promise<Db> {
        if (!this.db) {
            await this.client.connect();

            console.log("MongoDB Connected");

            this.db = this.client.db("mydatabase");
        }

        return this.db;
    }
}

export default Database;