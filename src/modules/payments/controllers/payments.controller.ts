import { Request, Response } from "express";
import { BaseController } from "../../user/controllers/base.controller.js";
import { PaymentService } from "../services/payments.model.js";

export class PaymentController extends BaseController {
    private paymentService = new PaymentService();

    async create(req: Request, res: Response) {
        try {
            const payment = await this.paymentService.create(req.body);
            return this.success(res, payment, "Payment created successfully", 201);
        } catch (error) {
            return this.error(res, error, 400);
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const payments = await this.paymentService.findAll();
            return this.success(res, payments, "Payments fetched successfully");
        } catch (error) {
            return this.error(res, error);
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const payment = await this.paymentService.findById(req.params.id);
            return this.success(res, payment, "Payment fetched successfully");
        } catch (error) {
            return this.error(res, error, 404);
        }
    }

    async update(req: Request, res: Response) {
        try {
            const updatedPayment = await this.paymentService.update(req.params.id, req.body);
            return this.success(res, updatedPayment, "Payment updated successfully");
        } catch (error) {
            return this.error(res, error, 400);
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const result = await this.paymentService.delete(req.params.id);
            return this.success(res, result, "Payment deleted successfully");
        } catch (error) {
            return this.error(res, error, 400);
        }
    }
}
