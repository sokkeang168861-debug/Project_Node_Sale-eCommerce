import express from "express";
import { RoleController } from "../role/controllers/role.controller.js";

const routes = express.Router();

const controller = new RoleController();

routes.post("/", controller.create.bind(controller));

routes.get("/", controller.findAll.bind(controller));

routes.get("/:id", controller.findById.bind(controller));

routes.put("/:id", controller.update.bind(controller));

routes.delete("/:id", controller.delete.bind(controller));

export default routes;