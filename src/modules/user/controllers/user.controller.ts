import { Request, Response } from "express";
import { UserService } from "../services/user.service.js";

const userService = new UserService();

export class UserController {

    async create(req: Request, res: Response) {

        const user = await userService.createUser(req.body);

        res.json(user);
    }

    async getAll(req: Request, res: Response) {

        const users = await userService.getUsers();

        res.json(users);
    }
}