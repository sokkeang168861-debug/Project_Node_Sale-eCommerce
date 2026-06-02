import express from "express";
import { InventoryController } from "../inventory/controllers/inventory.controller.js";

const routes = express.Router();
const controller = new InventoryController();

routes.get("/", controller.findAll.bind(controller));
routes.patch("/:sku/adjust", controller.adjust.bind(controller));

export default routes;
