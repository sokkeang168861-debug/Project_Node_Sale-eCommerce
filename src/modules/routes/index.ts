import express from "express";
import routes from "./user.routes.js";

const router = express.Router();

router.use("/users", routes);

export default router;