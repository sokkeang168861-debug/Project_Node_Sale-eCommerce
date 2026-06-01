import express from "express";
import userRoutes from "./user.routes.js";
import categoryRoutes from "./category.routes.js";
import customerRoutes from "./customer.routes.js";
import inventoryRoutes from "./inventory.routes.js";

const router = express.Router();

router.use("/users", userRoutes);
router.use("/categories", categoryRoutes);
router.use("/customers", customerRoutes);
router.use("/inventories", inventoryRoutes);

export default router;