import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

class Database {

    private static instance: Database;

    private constructor() {}

    public static getInstance(): Database {

        if (!Database.instance) {
            Database.instance = new Database();
        }

        return Database.instance;
    }

    public async connect(): Promise<void> {

        try {

            await mongoose.connect(
                `${process.env.MONGO_URI}/${process.env.DB_NAME}`
            );

            console.log("MongoDB Connected");

        } catch (error) {

            console.log(error);

            process.exit(1);
        }
    }
}

export default Database;