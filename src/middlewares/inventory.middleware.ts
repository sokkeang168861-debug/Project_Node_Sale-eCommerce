import { createInventorySchema, updateInventorySchema } from "../modules/inventory/validations/inventory.js";


// Validation middleware
export const validateCreateInventory = (req: any, res: any, next: any) => {
    const { error, value } = createInventorySchema.validate(req.body);
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

export const validateUpdateInventory = (req: any, res: any, next: any) => {
    const { error, value } = updateInventorySchema.validate(req.body);
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