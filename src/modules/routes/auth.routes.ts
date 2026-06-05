import { Router } from "express";
import { AuthController } from "../auth/controllers/auth.controller.js";
import { roleMiddleware } from "../../middlewares/role.middleware.js";
const router = Router();

const authController = new AuthController();

// create and login user
router.post("/register", roleMiddleware(['admin']),authController.register); 
router.post("/login", authController.login);

export default router;