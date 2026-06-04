import express from "express";
import { ProductController } from "../product/controllers/product.controller.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { roleMiddleware } from "../../middlewares/role.middleware.js";
const routes = express.Router();
const controller = new ProductController();

// public routes
routes.get("/", controller.findAll.bind(controller));
routes.get("/:id", controller.findById.bind(controller));

// Admin only access
routes.post(
    "/",
    authMiddleware,
    roleMiddleware(['admin', 'manager']),
    controller.create.bind(controller)
);

routes.put(
    "/:id",
    authMiddleware,
    roleMiddleware(['admin', 'manager']),
    controller.update.bind(controller)
);

routes.delete(
    "/:id",
    authMiddleware,
    roleMiddleware(['admin', 'manager']),
    controller.delete.bind(controller)
);;

export default routes;
