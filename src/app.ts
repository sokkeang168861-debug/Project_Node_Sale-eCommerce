import express  from "express";
import router from "./modules/routes";
const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
    res.json({
        status: "OK",
        message: "Sale API is running",
        version: "1.0.0"
    });
});

app.use('/api', router);

export default app;