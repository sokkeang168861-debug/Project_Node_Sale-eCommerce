import { Response, NextFunction } from "express";
import { AuthRequest } from "./auth.middleware.js";

export const adminMiddleware = (
    req: AuthRequest,
    res: Response,
    next: NextFunction
) => {
    if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    // admin role_id = 1
    if (Number(req.user.role_id) !== 1) {
        return res.status(403).json({ message: "Admin access required" });
    }

    next();
};