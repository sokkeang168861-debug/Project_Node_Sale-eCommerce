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

const router = express.Router();

router.use("/users", userRoutes);
router.use("/products", productRoutes);
router.use("/orders", orderRoutes);
router.use("/inventory", inventoryRoutes);
router.use("/invoices", invoiceRoutes);
router.use("/payments", paymentRoutes);
router.use("/roles", roleRoutes);
router.use("/warehouse", warehouseRoutes);
router.use("/shipments", shipmentRoutes);

export default router;