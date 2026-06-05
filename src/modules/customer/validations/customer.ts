import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

export const validateCreateCustomer = [
    body("user_id")
        .notEmpty()
        .withMessage("User ID is required")
        .isInt()
        .withMessage("User ID must be an integer"),
    
    body("name")
        .trim()
        .notEmpty()
        .withMessage("Name is required")
        .isLength({ min: 2 })
        .withMessage("Name must be at least 2 characters"),
    
    body("phone")
        .trim()
        .notEmpty()
        .withMessage("Phone is required")
        .isLength({ min: 10 })
        .withMessage("Phone must be at least 10 characters"),
    
    body("address")
        .trim()
        .notEmpty()
        .withMessage("Address is required")
        .isLength({ min: 5 })
        .withMessage("Address must be at least 5 characters")
];

export const validateUpdateCustomer = [
    body("user_id")
        .optional()
        .isInt()
        .withMessage("User ID must be an integer"),
    
    body("name")
        .optional()
        .trim()
        .isLength({ min: 2 })
        .withMessage("Name must be at least 2 characters"),
    
    body("phone")
        .optional()
        .trim()
        .isLength({ min: 10 })
        .withMessage("Phone must be at least 10 characters"),
    
    body("address")
        .optional()
        .trim()
        .isLength({ min: 5 })
        .withMessage("Address must be at least 5 characters")
];

export const handleValidationErrors = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            message: "Validation failed",
            errors: errors.array(),
            data: null
        });
    }
    next();
};
