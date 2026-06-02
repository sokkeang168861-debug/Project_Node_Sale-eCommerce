import express from "express";
import { ShipmentController } from "../shipments/controllers/shipments.controller.js";

const routes = express.Router();
const controller = new ShipmentController();

routes.post("/", controller.create.bind(controller));
routes.get("/", controller.findAll.bind(controller));
routes.get("/:id", controller.findById.bind(controller));
routes.put("/:id", controller.update.bind(controller));
routes.delete("/:id", controller.delete.bind(controller));

export default routes;
