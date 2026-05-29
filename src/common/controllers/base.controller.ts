import { Response } from "express";

export class BaseController {

    protected success(
        res: Response,
        data: any,
        message: string = "Success",
        statusCode: number = 200
    ) {
        return res.status(statusCode).json({
            success: true,
            message,
            data
        });
    }

    protected error(
        res: Response,
        error: any,
        statusCode: number = 500
    ) {
        const message = error?.message || "An error occurred";
        
        return res.status(statusCode).json({
            success: false,
            message,
            data: null
        });
    }

    protected validationError(
        res: Response,
        errors: any[],
        message: string = "Validation failed"
    ) {
        return res.status(400).json({
            success: false,
            message,
            errors,
            data: null
        });
    }
}
