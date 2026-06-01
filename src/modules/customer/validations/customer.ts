import Joi from "joi";

export const createCustomerSchema = Joi.object({
    company_name: Joi.string()
        .required()
        .min(2)
        .max(100)
        .messages({
            "string.empty": "Company name is required",
            "string.min": "Company name must be at least 2 characters long",
            "string.max": "Company name must not exceed 100 characters"
        }),

    contact_email: Joi.string()
        .required()
        .email()
        .messages({
            "string.empty": "Email is required",
            "string.email": "Email must be a valid email address"
        }),

    phone: Joi.string()
        .required()
        .min(10)
        .max(20)
        .messages({
            "string.empty": "Phone is required",
            "string.min": "Phone must be at least 10 characters long",
            "string.max": "Phone must not exceed 20 characters"
        }),

    address: Joi.string()
        .required()
        .min(5)
        .max(255)
        .messages({
            "string.empty": "Address is required",
            "string.min": "Address must be at least 5 characters long",
            "string.max": "Address must not exceed 255 characters"
        }),

    status: Joi.string()
        .required()
        .valid("active", "inactive")
        .messages({
            "string.empty": "Status is required",
            "any.only": "Status must be either 'active' or 'inactive'"
        })
});

export const updateCustomerSchema = Joi.object({
    company_name: Joi.string()
        .optional()
        .min(2)
        .max(100)
        .messages({
            "string.min": "Company name must be at least 2 characters long",
            "string.max": "Company name must not exceed 100 characters"
        }),

    contact_email: Joi.string()
        .optional()
        .email()
        .messages({
            "string.email": "Email must be a valid email address"
        }),

    phone: Joi.string()
        .optional()
        .min(10)
        .max(20)
        .messages({
            "string.min": "Phone must be at least 10 characters long",
            "string.max": "Phone must not exceed 20 characters"
        }),

    address: Joi.string()
        .optional()
        .min(5)
        .max(255)
        .messages({
            "string.min": "Address must be at least 5 characters long",
            "string.max": "Address must not exceed 255 characters"
        }),

    status: Joi.string()
        .optional()
        .valid("active", "inactive")
        .messages({
            "any.only": "Status must be either 'active' or 'inactive'"
        })
}).min(1);
