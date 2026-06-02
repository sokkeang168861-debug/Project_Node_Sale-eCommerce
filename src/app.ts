import express, { Application } from "express";
import cors from "cors";
import router from "./modules/routes";

const app: Application = express();

// Middleware
app.use(cors({
    origin: "http://127.0.0.1:5500",
    credentials: true
}));

app.use(express.json());

// Health check route
app.get("/", (_req, res) => {
    res.json({
        status: "OK",
        message: "Sale API is running",
        version: "1.0.0"
    });
});

// API routes
app.use("/api", router);

export default app;