import express from "express";
import { InventoryController } from "../inventory/controllers/inventory.controller.js";
import { validateCreateInventory, validateUpdateInventory } from "../../middlewares/inventory.middleware.js";


const routes = express.Router();
const controller = new InventoryController();

routes.post("/", validateCreateInventory, controller.create.bind(controller));
routes.get("/", controller.findAll.bind(controller));
routes.get("/warehouse", controller.findByWarehouseId.bind(controller));
routes.get("/product", controller.findByProductId.bind(controller));
routes.get("/:id", controller.findById.bind(controller));
routes.put("/:id", validateUpdateInventory, controller.update.bind(controller));
routes.delete("/:id", controller.delete.bind(controller));

export default routes;
