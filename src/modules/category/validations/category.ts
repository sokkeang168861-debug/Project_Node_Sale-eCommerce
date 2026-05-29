import Joi from "joi";

export const createCategorySchema = Joi.object({
    name: Joi.string()
        .required()
        .min(2)
        .max(100)
        .messages({
            "string.empty": "Category name is required",
            "string.min": "Category name must be at least 2 characters long",
            "string.max": "Category name must not exceed 100 characters"
        }),

    parent_id: Joi.number()
        .optional()
        .allow(null)
        .messages({
            "number.base": "Parent ID must be a number"
        })
});

export const updateCategorySchema = Joi.object({
    name: Joi.string()
        .optional()
        .min(2)
        .max(100)
        .messages({
            "string.min": "Category name must be at least 2 characters long",
            "string.max": "Category name must not exceed 100 characters"
        }),

    parent_id: Joi.number()
        .optional()
        .allow(null)
        .messages({
            "number.base": "Parent ID must be a number"
        })
}).min(1);
