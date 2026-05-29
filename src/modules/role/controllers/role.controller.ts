import { Request, Response } from "express";
import { BaseController } from "../../user/controllers/base.controller.js";
import { RoleService } from "../services/role.service.js";
import { Role } from "../models/role.model.js";

export class RoleController extends BaseController {

    private roleService = new RoleService();

    async create(req: Request, res: Response) {

        try {

            const role = await this.roleService.create(
                req.body as Role
            );

            return this.success(
                res,
                role,
                "Role created successfully",
                201
            );

        } catch (error) {

            return this.error(res, error, 400);
        }
    }

    async findAll(req: Request, res: Response) {

        try {

            const roles = await this.roleService.findAll();

            return this.success(
                res,
                roles,
                "Roles fetched successfully"
            );

        } catch (error) {

            return this.error(res, error);
        }
    }

    async findById(req: Request, res: Response) {

        try {

            const role = await this.roleService.findById(req.params.id);

            return this.success(
                res,
                role,
                "Role fetched successfully"
            );

        } catch (error) {

            return this.error(res, error, 404);
        }
    }

    async update(req: Request, res: Response) {

        try {

            const updatedRole = await this.roleService.update(
                req.params.id,
                req.body as Partial<Role>
            );

            return this.success(
                res,
                updatedRole,
                "Role updated successfully"
            );

        } catch (error) {

            return this.error(res, error, 400);
        }
    }

    async delete(req: Request, res: Response) {

        try {

            const result = await this.roleService.delete(req.params.id);

            return this.success(
                res,
                result,
                "Role deleted successfully"
            );

        } catch (error) {

            return this.error(res, error, 400);
        }
    }
}