import { Request, Response } from "express";
import { BaseController } from "../../../common/controllers/base.controller.js";
import { CustomerService } from "../services/customer.service.js";

export class CustomerController extends BaseController {
    private customerService = new CustomerService();

    async create(req: Request, res: Response) {
        try {
            const customer = await this.customerService.create(req.body);

            return this.success(
                res,
                customer,
                "Customer created successfully",
                201
            );
        } catch (error) {
            return this.error(res, error, 400);
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const customers = await this.customerService.findAll();

            return this.success(
                res,
                customers,
                "Customers fetched successfully"
            );
        } catch (error) {
            return this.error(res, error);
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const customer = await this.customerService.findById(req.params.id);

            return this.success(
                res,
                customer,
                "Customer fetched successfully"
            );
        } catch (error) {
            return this.error(res, error, 404);
        }
    }

    async findByUserId(req: Request, res: Response) {
        try {
            const userId = req.query.user_id as string;
            const customer = await this.customerService.findByUserId(userId);

            return this.success(
                res,
                customer,
                "Customer fetched successfully"
            );
        } catch (error) {
            return this.error(res, error, 404);
        }
    }

    async update(req: Request, res: Response) {
        try {
            const customer = await this.customerService.update(req.params.id, req.body, req.user);

            return this.success(
                res,
                customer,
                "Customer updated successfully"
            );
        } catch (error) {
            return this.error(res, error, 400);
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const customer = await this.customerService.delete(req.params.id, req.user);

            return this.success(
                res,
                customer,
                "Customer deleted successfully"
            );
        } catch (error) {
            return this.error(res, error, 400);
        }
    }
}
