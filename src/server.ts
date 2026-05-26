import express from "express";
import Database from "./config/db.js";

const app = express();

const PORT = 3000;

async function startServer() {
    const db = await Database.getInstance().connect();

    console.log("Database Ready:", db.databaseName);

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

startServer();