import mysql, { Pool } from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

class Database {
    private static instance: Database;
    private pool: Pool;

    private constructor() {
        this.pool = mysql.createPool({
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,

            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });
    }

    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }

        return Database.instance;
    }

    public getPool(): Pool {
        return this.pool;
    }
}

export default Database;