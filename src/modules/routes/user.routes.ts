import express from "express";
import { UserController } from "../user/controllers/user.controller.js";
import { roleMiddleware } from "../../middlewares/role.middleware.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";
const routes = express.Router();

const controller = new UserController();

routes.post("/register", controller.register.bind(controller))

routes.get("/",authMiddleware,roleMiddleware(['admin']),controller.findAll.bind(controller));

routes.get("/:id",authMiddleware,roleMiddleware(['admin']),controller.findById.bind(controller));

routes.put("/:id", authMiddleware,roleMiddleware(['admin', 'user']),controller.update.bind(controller));

routes.delete("/:id",authMiddleware,roleMiddleware(['admin']),controller.delete.bind(controller));

export default routes;