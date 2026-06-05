import { Request, Response } from "express";
import { BaseController } from "../../../common/controllers/base.controller.js";
import { CategoryService } from "../services/category.service.js";
import { AuthRequest } from "../../../middlewares/auth.middleware.js";

export class CategoryController extends BaseController {

    private categoryService = new CategoryService();

    // CREATE
    async create(req: Request, res: Response) {

        try {

            const category = await this.categoryService.create(req.body, req.user);

            return this.success(
                res,
                category,
                "Category created successfully",
                201
            );

        } catch (error) {

            return this.error(res, error, 400);
        }
    }

    // READ ALL
    async findAll(req: Request, res: Response) {

        try {

            const categories = await this.categoryService.findAll();

            return this.success(
                res,
                categories,
                "Categories fetched successfully"
            );

        } catch (error) {

            return this.error(res, error);
        }
    }

    // READ BY ID
    async findById(req: Request, res: Response) {

        try {

            const id = Number(req.params.id);

            const category = await this.categoryService.findById(id);

            return this.success(
                res,
                category,
                "Category fetched successfully"
            );

        } catch (error) {

            return this.error(res, error, 404);
        }
    }

    // UPDATE
    async update(req: Request, res: Response) {

        try {

            const id = Number(req.params.id);

            const updatedCategory =
                await this.categoryService.update(
                    id,
                    req.body
                , req.user);

            return this.success(
                res,
                updatedCategory,
                "Category updated successfully"
            );

        } catch (error) {

            return this.error(res, error, 400);
        }
    }

    // DELETE
    async delete(req: Request, res: Response) {

        try {

            const id = Number(req.params.id);

            const deletedCategory = await this.categoryService.delete(id, req.user);

            return this.success(
                res,
                deletedCategory,
                "Category deleted successfully"
            );

        } catch (error) {

            return this.error(res, error, 400);
        }
    }
}
