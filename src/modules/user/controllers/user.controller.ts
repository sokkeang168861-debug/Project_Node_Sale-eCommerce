import { Request, Response } from "express";
import { BaseController } from "./base.controller.js";
import { UserService } from "../services/user.service.js";

export class UserController extends BaseController {

    private userService = new UserService();

    // CREATE
    async create(req: Request, res: Response) {

        try {

            const user = await this.userService.create(
                req.body
            );

            return this.success(
                res,
                user,
                "User created successfully",
                201
            );

        } catch (error) {

            return this.error(res, error, 400);
        }
    }

    // READ ALL
    async findAll(req: Request, res: Response) {

        try {

            const users = await this.userService.findAll();

            return this.success(
                res,
                users,
                "Users fetched successfully"
            );

        } catch (error) {

            return this.error(res, error);
        }
    }

    // READ BY ID
    async findById(req: Request, res: Response) {

        try {

            const id = Number(req.params.id);

            const user = await this.userService.findById(id);

            return this.success(
                res,
                user,
                "User fetched successfully"
            );

        } catch (error) {

            return this.error(res, error, 404);
        }
    }

    // UPDATE
    async update(req: Request, res: Response) {

        try {

            const id = Number(req.params.id);

            const updatedUser =
                await this.userService.update(
                    id,
                    req.body
                );

            return this.success(
                res,
                updatedUser,
                "User updated successfully"
            );

        } catch (error) {

            return this.error(res, error, 400);
        }
    }

    // DELETE
    async delete(req: Request, res: Response) {

        try {

            const id = Number(req.params.id);

            const result =
                await this.userService.delete(id);

            return this.success(
                res,
                result,
                "User deleted successfully"
            );

        } catch (error) {

            return this.error(res, error, 400);
        }
    }
}