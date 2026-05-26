import app from "./app.js";
import Database from "./config/db.js";

const HOST = 'localhost'
const PORT = 3000;

async function startServer() {
    const db = await Database.getInstance().connect();

    console.log("Database Ready:", db.databaseName);

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

startServer();