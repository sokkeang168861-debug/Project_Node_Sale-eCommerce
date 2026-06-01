import express from "express";
import { CustomerController } from "../customer/controllers/customer.controller.js";
import { validateCreateCustomer, validateUpdateCustomer } from "../../middlewares/customer.middlewares.js";

const routes = express.Router();
const controller = new CustomerController();



routes.post("/", validateCreateCustomer, controller.create.bind(controller));
routes.get("/", controller.findAll.bind(controller));
routes.get("/status", controller.findByStatus.bind(controller));
routes.get("/:id", controller.findById.bind(controller));
routes.put("/:id", validateUpdateCustomer, controller.update.bind(controller));
routes.delete("/:id", controller.delete.bind(controller));

export default routes;
