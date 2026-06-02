import express from "express";
import { OrderController } from "../order/controllers/order.controller.js";

const routes = express.Router();
const controller = new OrderController();

routes.post("/", controller.create.bind(controller));
routes.get("/", controller.findAll.bind(controller));
routes.get("/:id", controller.findById.bind(controller));
routes.patch("/:id/confirm", controller.confirm.bind(controller));
routes.patch("/:id/cancel", controller.cancel.bind(controller));

export default routes;
