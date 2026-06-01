import { createCategorySchema, updateCategorySchema } from "../modules/category/validations/category.js";
// Validation middleware
export const validateCreateCategory = (req: any, res: any, next: any) => {
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

export const validateUpdateCategory = (req: any, res: any, next: any) => {
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