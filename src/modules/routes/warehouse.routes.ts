import express from "express";
import { WarehouseController } from "../warehouse/controllers/warehouse.controller.js";

const routes = express.Router();
const controller = new WarehouseController();

routes.post("/", controller.create.bind(controller));
routes.get("/", controller.findAll.bind(controller));
routes.get("/:id", controller.findById.bind(controller));
routes.put("/:id", controller.update.bind(controller));
routes.delete("/:id", controller.delete.bind(controller));

export default routes;
