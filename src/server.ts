import app from "./app.js";
import Database from "./config/db.js";

const PORT = Number(process.env.PORT) || 81;

async function startServer() {
    try {
        await Database.getInstance().getPool();

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1);
    }
}

startServer();