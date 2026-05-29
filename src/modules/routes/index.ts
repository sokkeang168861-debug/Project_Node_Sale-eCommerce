import express from "express";
import userRoutes from "./user.routes.js";
import roleRoutes from "./role.routes.js";

const router = express.Router();

router.use("/users", userRoutes);
router.use("/roles", roleRoutes);

export default router;