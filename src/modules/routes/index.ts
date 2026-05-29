import express from "express";
import userRoutes from "./user.routes.js";
<<<<<<< HEAD
import productRoutes from "./product.routes.js";
import orderRoutes from "./order.routes.js";
import inventoryRoutes from "./inventory.routes.js";
import invoiceRoutes from "./invoice.routes.js";
=======
import roleRoutes from "./role.routes.js";
>>>>>>> 98c18b49f7ba2d42e9cbe8715fc9015dd39302d5

const router = express.Router();

router.use("/users", userRoutes);
<<<<<<< HEAD
router.use("/products", productRoutes);
router.use("/orders", orderRoutes);
router.use("/inventory", inventoryRoutes);
router.use("/invoices", invoiceRoutes);
=======
router.use("/roles", roleRoutes);
>>>>>>> 98c18b49f7ba2d42e9cbe8715fc9015dd39302d5

export default router;