import express from "express";
import { UserController } from "../user/controllers/user.controller.js";

const routes = express.Router();

const controller = new UserController();

routes.post("/", controller.create);

routes.get("/", controller.getAll);

export default routes;