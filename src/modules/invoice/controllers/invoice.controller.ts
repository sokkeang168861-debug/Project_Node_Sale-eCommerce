import { Request, Response } from "express";
import { BaseController } from "../../../common/controllers/base.controller.js";
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
            const result = await this.invoiceService.createPayment(
                req.params.id,
                req.body
            );

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
