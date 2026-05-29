import { Response } from "express";

export class BaseController {

    protected success(
        res: Response,
        data: any,
        message = "Success",
        statusCode = 200
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
        statusCode = 500
    ) {

        return res.status(statusCode).json({
            success: false,
            message: error.message || "Internal Server Error"
        });
    }
}