import { Request, Response } from "express";
import { BaseController } from "../../user/controllers/base.controller.js";
import { InvoiceService } from "../services/invoices.model.js";

export class InvoiceController extends BaseController {
    private invoiceService = new InvoiceService();

    async findAll(req: Request, res: Response) {
        try {
            const invoices = await this.invoiceService.findAll();

            return this.success(
                res,
                invoices,
                "Invoices fetched successfully"
            );
        } catch (error) {
            return this.error(res, error);
        }
    }

    async createPayment(req: Request, res: Response) {
        try {
            const orderId = Number(req.params.id);
            const { amount, payment_method, payment_status, transaction_id } = req.body;

            if (Number.isNaN(orderId) || !amount || !payment_method) {
                throw new Error("Invalid order ID, amount, or payment method");
            }

            const payment = {
                order_id: orderId,
                amount,
                payment_method,
                payment_status,
                transaction_id
            };

            const result = await this.invoiceService.createPayment(orderId, payment);

            return this.success(
                res,
                result,
                "Payment created successfully",
                201
            );
        } catch (error) {
            return this.error(res, error, 400);
        }
    }
}
