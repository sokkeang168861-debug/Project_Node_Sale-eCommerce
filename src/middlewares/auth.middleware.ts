import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../modules/auth/utils/jwt.js";
import { TokenPayload } from "../modules/auth/utils/jwt.js";

export interface AuthRequest extends Request {
    user?: TokenPayload;
}

export const authMiddleware = (
    req: AuthRequest,
    res: Response,
    next: NextFunction
): void => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            res.status(401).json({
                message: "Unauthorized"
            });
            return;
        }

        const token = authHeader.split(" ")[1];

        const decoded = verifyToken(token);

        req.user = decoded;

        console.log("🔥 AUTH MIDDLEWARE HIT:", req.originalUrl);
        console.log("👤 USER:", req.user);
        console.log("Role_id:", req.user.role_id);

        next();
    } catch (error) {
        res.status(401).json({
            message: "Invalid token"
        });
    }
};