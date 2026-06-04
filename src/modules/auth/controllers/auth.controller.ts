import { Request, Response } from "express";
import { AuthService } from "../services/auth.service.js";
import { BaseController } from "../../../common/controllers/base.controller.js";

export class AuthController extends BaseController {

    private authService = new AuthService();

    register = async (req: Request, res: Response) => {
        try {
            const result = await this.authService.register(req.body);

            return this.success(
                res,
                result,
                "User registered successfully",
                201
            );

        } catch (error) {
            return this.error(res, error, 400);
        }
    };

    login = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body;

            const result = await this.authService.login(email, password);

            return this.success(
                res,
                result,
                "Login Successfull",
                200
            )
        }catch(error) {
            return this.error(res,error,401)
        }
        
    }
}