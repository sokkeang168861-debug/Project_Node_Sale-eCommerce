import app from "./app.js";
import Database from "./config/db.js";

const PORT = 3000;

async function startServer() {

    await Database.getInstance().connect();

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

startServer();