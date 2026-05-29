import { Request, Response } from "express";
import { BaseController } from "../../user/controllers/base.controller.js";
import { WarehouseService } from "../services/warehouses.model.js";

export class WarehouseController extends BaseController {
    private warehouseService = new WarehouseService();

    async create(req: Request, res: Response) {
        try {
            const warehouse = await this.warehouseService.create(req.body);

            return this.success(
                res,
                warehouse,
                "Warehouse created successfully",
                201
            );
        } catch (error) {
            return this.error(res, error, 400);
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const warehouses = await this.warehouseService.findAll();

            return this.success(
                res,
                warehouses,
                "Warehouses fetched successfully"
            );
        } catch (error) {
            return this.error(res, error);
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const warehouse = await this.warehouseService.findById(req.params.id);

            return this.success(
                res,
                warehouse,
                "Warehouse fetched successfully"
            );
        } catch (error) {
            return this.error(res, error, 404);
        }
    }

    async update(req: Request, res: Response) {
        try {
            const updatedWarehouse = await this.warehouseService.update(req.params.id, req.body);

            return this.success(
                res,
                updatedWarehouse,
                "Warehouse updated successfully"
            );
        } catch (error) {
            return this.error(res, error, 400);
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const result = await this.warehouseService.delete(req.params.id);

            return this.success(
                res,
                result,
                "Warehouse deleted successfully"
            );
        } catch (error) {
            return this.error(res, error, 400);
        }
    }
}
