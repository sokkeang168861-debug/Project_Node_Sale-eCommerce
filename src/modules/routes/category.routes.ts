import express from "express";
import { CategoryController } from "../category/controllers/category.controller.js";
import { createCategorySchema, updateCategorySchema } from "../category/validations/category.js";

const routes = express.Router();
const controller = new CategoryController();

// Validation middleware
const validateCreateCategory = (req: any, res: any, next: any) => {
    const { error, value } = createCategorySchema.validate(req.body);
    if (error) {
        return res.status(400).json({
            success: false,
            message: "Validation failed",
            errors: error.details.map((detail: any) => ({
                field: detail.path.join("."),
                message: detail.message
            })),
            data: null
        });
    }
    req.body = value;
    next();
};

const validateUpdateCategory = (req: any, res: any, next: any) => {
    const { error, value } = updateCategorySchema.validate(req.body);
    if (error) {
        return res.status(400).json({
            success: false,
            message: "Validation failed",
            errors: error.details.map((detail: any) => ({
                field: detail.path.join("."),
                message: detail.message
            })),
            data: null
        });
    }
    req.body = value;
    next();
};

routes.post("/", validateCreateCategory, controller.create.bind(controller));
routes.get("/", controller.findAll.bind(controller));
routes.get("/parent", controller.findByParentId.bind(controller));
routes.get("/:id", controller.findById.bind(controller));
routes.put("/:id", validateUpdateCategory, controller.update.bind(controller));
routes.delete("/:id", controller.delete.bind(controller));

export default routes;
