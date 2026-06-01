import Joi from "joi";

export const createInventorySchema = Joi.object({
    warehouse_id: Joi.number()
        .required()
        .min(1)
        .messages({
            "number.empty": "Warehouse ID is required",
            "number.min": "Warehouse ID must be at least 1"
        }),

    product_id: Joi.number()
        .required()
        .min(1)
        .messages({
            "number.empty": "Product ID is required",
            "number.min": "Product ID must be at least 1"
        }),

    quantity: Joi.number()
        .required()
        .min(0)
        .messages({
            "number.empty": "Quantity is required",
            "number.min": "Quantity must be at least 0"
        }),

    stock_quantity: Joi.number()
        .required()
        .min(0)
        .messages({
            "number.empty": "Stock quantity is required",
            "number.min": "Stock quantity must be at least 0"
        })
});

export const updateInventorySchema = Joi.object({
    warehouse_id: Joi.number()
        .optional()
        .min(1)
        .messages({
            "number.min": "Warehouse ID must be at least 1"
        }),

    product_id: Joi.number()
        .optional()
        .min(1)
        .messages({
            "number.min": "Product ID must be at least 1"
        }),

    quantity: Joi.number()
        .optional()
        .min(0)
        .messages({
            "number.min": "Quantity must be at least 0"
        }),

    stock_quantity: Joi.number()
        .optional()
        .min(0)
        .messages({
            "number.min": "Stock quantity must be at least 0"
        })
}).min(1);
