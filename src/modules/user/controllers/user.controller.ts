import { Request, Response } from "express";
import { BaseController } from "../../../common/controllers/base.controller.js";
import { UserService } from "../services/user.service.js";
import { User } from "../models/user.model.js";
import { toUserResponse } from "../models/user.mapper.js";

export class UserController extends BaseController {

    private userService = new UserService();

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

            const user = await this.userService.findById(req.params.id);

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

            const { password, id: bodyId, created_at, ...safeData } = req.body;

            const updatedUser =
                await this.userService.update(
                    id,
                    safeData
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

            const result =
                await this.userService.delete(req.params.id);

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