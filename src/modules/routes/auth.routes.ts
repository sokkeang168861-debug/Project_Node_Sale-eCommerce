import { Router } from "express";
import { AuthController } from "../auth/controllers/auth.controller.js";

const router = Router();

const authController = new AuthController();

router.post("/register", authController.register);
router.post("/login", authController.login);

export default router;