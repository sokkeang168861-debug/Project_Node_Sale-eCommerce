import { Request, Response } from "express";
import { BaseController } from "../../../common/controllers/base.controller.js";
import { ProductService } from "../services/products.model.js";

export class ProductController extends BaseController {
    private productService = new ProductService();

    async create(req: Request, res: Response) {
        try {
            const product = await this.productService.create(req.body);

            return this.success(
                res,
                product,
                "Product created successfully",
                201
            );
        } catch (error) {
            return this.error(res, error, 400);
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const products = await this.productService.findAll();

            return this.success(
                res,
                products,
                "Products fetched successfully"
            );
        } catch (error) {
            return this.error(res, error);
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const product = await this.productService.findById(req.params.id);

            return this.success(
                res,
                product,
                "Product fetched successfully"
            );
        } catch (error) {
            return this.error(res, error, 404);
        }
    }

    async update(req: Request, res: Response) {
        try {
            const updatedProduct = await this.productService.update(req.params.id, req.body);

            return this.success(
                res,
                updatedProduct,
                "Product updated successfully"
            );
        } catch (error) {
            return this.error(res, error, 400);
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const result = await this.productService.delete(req.params.id);

            return this.success(
                res,
                result,
                "Product deleted successfully"
            );
        } catch (error) {
            return this.error(res, error, 400);
        }
    }
}
