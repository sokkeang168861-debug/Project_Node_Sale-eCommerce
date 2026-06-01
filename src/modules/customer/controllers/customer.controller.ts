import { Request, Response } from "express";
import { BaseController } from "../../../common/controllers/base.controller.js";
import { CustomerService } from "../services/customer.service.js";

export class CustomerController extends BaseController {
    private customerService = new CustomerService();

    // CREATE
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

    // READ ALL
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

    // READ BY ID
    async findById(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);

            const customer = await this.customerService.findById(id);

            return this.success(
                res,
                customer,
                "Customer fetched successfully"
            );
        } catch (error) {
            return this.error(res, error, 404);
        }
    }

    // READ BY STATUS
    async findByStatus(req: Request, res: Response) {
        try {
            const status = req.query.status as string;

            if (!status) {
                return this.error(
                    res,
                    new Error("Status query parameter is required"),
                    400
                );
            }

            const customers = await this.customerService.findByStatus(status);

            return this.success(
                res,
                customers,
                "Customers fetched successfully"
            );
        } catch (error) {
            return this.error(res, error);
        }
    }

    // UPDATE
    async update(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);

            const updatedCustomer = await this.customerService.update(
                id,
                req.body
            );

            return this.success(
                res,
                updatedCustomer,
                "Customer updated successfully"
            );
        } catch (error) {
            return this.error(res, error, 400);
        }
    }

    // DELETE
    async delete(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);

            const deletedCustomer = await this.customerService.delete(id);

            return this.success(
                res,
                deletedCustomer,
                "Customer deleted successfully"
            );
        } catch (error) {
            return this.error(res, error, 400);
        }
    }
}
