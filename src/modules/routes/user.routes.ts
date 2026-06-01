import express from "express";
import { UserController } from "../user/controllers/user.controller.js";

const routes = express.Router();

const controller = new UserController();

routes.get("/", controller.findAll.bind(controller));

routes.get("/:id", controller.findById.bind(controller));

routes.put("/:id", controller.update.bind(controller));

routes.delete("/:id", controller.delete.bind(controller));

export default routes;