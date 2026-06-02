import express from "express";
import userRoutes from "./user.routes.js";
import productRoutes from "./product.routes.js";
import orderRoutes from "./order.routes.js";
import inventoryRoutes from "./inventory.routes.js";
import invoiceRoutes from "./invoice.routes.js";
import roleRoutes from "./role.routes.js";
import warehouseRoutes from "./warehouse.routes.js";
import shipmentRoutes from "./shipments.routes.js";
import paymentRoutes from "./payments.routes.js";
import authRoutes from "./auth.routes.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";

const router = express.Router();

// Public routes
router.use("/auth", authRoutes);

// Protected routes
router.use("/users", authMiddleware, userRoutes);
router.use("/products", productRoutes);
router.use("/orders", authMiddleware, orderRoutes);
router.use("/inventory", authMiddleware, inventoryRoutes);
router.use("/invoices", authMiddleware, invoiceRoutes);
router.use("/payments", authMiddleware, paymentRoutes);
router.use("/roles", authMiddleware, roleRoutes);
router.use("/warehouse", authMiddleware, warehouseRoutes);
router.use("/shipments", authMiddleware, shipmentRoutes);

export default router;