import { Response } from "express";

export class BaseController {
    success(
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

    error(res: Response, error: any, statusCode: number = 500) {
        return res.status(statusCode).json({
            success: false,
            message: error.message || "An error occurred",
            data: null
        });
    }
}
