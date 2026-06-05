import express from "express";
import { CustomerController } from "../customer/controllers/customer.controller.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { roleMiddleware } from "../../middlewares/role.middleware.js";
import { validateCreateCustomer, validateUpdateCustomer, handleValidationErrors } from "../customer/validations/customer.js";

const routes = express.Router();
const controller = new CustomerController();

// Public routes
routes.get("/", authMiddleware, roleMiddleware(['admin']) ,controller.findAll.bind(controller));
routes.get("/user",  controller.findByUserId.bind(controller));
routes.get("/:id",  controller.findById.bind(controller));

// Admin/Manager only routes
routes.post(
    "/",
    authMiddleware,
    roleMiddleware(['admin', 'user']),
    validateCreateCustomer,
    handleValidationErrors,
    controller.create.bind(controller)
);

routes.put(
    "/:id",
    authMiddleware,
    roleMiddleware(['admin', 'user']),
    validateUpdateCustomer,
    handleValidationErrors,
    controller.update.bind(controller)
);

routes.delete(
    "/:id",
    authMiddleware,
    roleMiddleware(['admin', 'user']),
    controller.delete.bind(controller)
);

export default routes;
