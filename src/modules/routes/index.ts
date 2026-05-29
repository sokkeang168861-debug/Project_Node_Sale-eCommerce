import express from "express";
import userRoutes from "./user.routes.js";
import productRoutes from "./product.routes.js";
import orderRoutes from "./order.routes.js";
import inventoryRoutes from "./inventory.routes.js";
import invoiceRoutes from "./invoice.routes.js";

const router = express.Router();

router.use("/users", userRoutes);
router.use("/products", productRoutes);
router.use("/orders", orderRoutes);
router.use("/inventory", inventoryRoutes);
router.use("/invoices", invoiceRoutes);

export default router;