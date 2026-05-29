import { Request, Response } from "express";
import { BaseController } from "../../user/controllers/base.controller.js";
import { OrderService } from "../services/orders.model.js";

export class OrderController extends BaseController {
    private orderService = new OrderService();

    async create(req: Request, res: Response) {
        try {
            const order = await this.orderService.create(req.body);

            return this.success(
                res,
                order,
                "Order created successfully",
                201
            );
        } catch (error) {
            return this.error(res, error, 400);
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const orders = await this.orderService.findAll();

            return this.success(
                res,
                orders,
                "Orders fetched successfully"
            );
        } catch (error) {
            return this.error(res, error);
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const order = await this.orderService.findById(req.params.id);

            return this.success(
                res,
                order,
                "Order fetched successfully"
            );
        } catch (error) {
            return this.error(res, error, 404);
        }
    }

    async confirm(req: Request, res: Response) {
        try {
            const result = await this.orderService.confirm(req.params.id);

            return this.success(
                res,
                result,
                "Order confirmed successfully"
            );
        } catch (error) {
            return this.error(res, error, 400);
        }
    }

    async cancel(req: Request, res: Response) {
        try {
            const result = await this.orderService.cancel(req.params.id);

            return this.success(
                res,
                result,
                "Order cancelled successfully"
            );
        } catch (error) {
            return this.error(res, error, 400);
        }
    }
}
