import express from "express";
import { OrderController } from "../order/controllers/order.controller.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { roleMiddleware } from "../../middlewares/role.middleware.js";

const routes = express.Router();
const controller = new OrderController();


// USER can create order
routes.post(
    "/",
    authMiddleware,
    roleMiddleware(["user"]),
    controller.create.bind(controller)
);


// ADMIN / MANAGER see all orders
routes.get(
    "/",
    authMiddleware,
    roleMiddleware(["admin", "manager"]),
    controller.findAll.bind(controller)
);


// ANY logged-in user can view single order (optional)
routes.get(
    "/:id",
    authMiddleware,
    roleMiddleware(["admin", "manager", "user"]),
    controller.findById.bind(controller)
);


// CONFIRM order (staff + manager + admin)
routes.patch(
    "/:id/confirm",
    authMiddleware,
    roleMiddleware(["admin", "manager", "staff"]),
    controller.confirm.bind(controller)
);


// CANCEL only admin + manager
routes.patch(
    "/:id/cancel",
    authMiddleware,
    roleMiddleware(["admin", "manager"]),
    controller.cancel.bind(controller)
);

export default routes;