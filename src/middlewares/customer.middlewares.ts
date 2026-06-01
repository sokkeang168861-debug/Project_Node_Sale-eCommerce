import { createCustomerSchema, updateCustomerSchema } from "../modules/customer/validations/customer.js";
// Validation middleware
export const validateCreateCustomer = (req: any, res: any, next: any) => {
    const { error, value } = createCustomerSchema.validate(req.body);
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

export const validateUpdateCustomer = (req: any, res: any, next: any) => {
    const { error, value } = updateCustomerSchema.validate(req.body);
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