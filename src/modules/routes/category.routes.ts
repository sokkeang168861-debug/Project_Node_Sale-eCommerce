import express from "express";
import { CategoryController } from "../category/controllers/category.controller.js";
import { validateCreateCategory, validateUpdateCategory } from "../../middlewares/category.middlewares.js";

const routes = express.Router();
const controller = new CategoryController();


routes.post("/", validateCreateCategory, controller.create.bind(controller));
routes.get("/", controller.findAll.bind(controller));
routes.get("/parent", controller.findByParentId.bind(controller));
routes.get("/:id", controller.findById.bind(controller));
routes.put("/:id", validateUpdateCategory, controller.update.bind(controller));
routes.delete("/:id", controller.delete.bind(controller));

export default routes;