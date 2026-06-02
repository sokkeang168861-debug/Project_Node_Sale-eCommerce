import { Request, Response } from "express";
import { AuthService } from "../services/auth.service.js";

export class AuthController {

    private authService = new AuthService();

    register = async (req: Request, res: Response) => {
        try {
            const result = await this.authService.register(req.body);

            res.status(201).json(result);
        } catch (error: any) {
            res.status(400).json({
                message: error.message
            });
        }
    };

    login = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body;

            const result = await this.authService.login(email, password);

            res.status(200).json(result);
        } catch (error: any) {
            res.status(401).json({
                message: error.message
            });
        }
    };
}