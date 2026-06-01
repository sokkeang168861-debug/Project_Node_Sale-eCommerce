import { Request, Response } from "express";
import { BaseController } from "../../../common/controllers/base.controller.js";
import { InventoryService } from "../services/inventory.service.js";

export class InventoryController extends BaseController {
    private inventoryService = new InventoryService();

    // CREATE
    async create(req: Request, res: Response) {
        try {
            const inventory = await this.inventoryService.create(req.body);

            return this.success(
                res,
                inventory,
                "Inventory created successfully",
                201
            );
        } catch (error) {
            return this.error(res, error, 400);
        }
    }

    // READ ALL
    async findAll(req: Request, res: Response) {
        try {
            const inventories = await this.inventoryService.findAll();

            return this.success(
                res,
                inventories,
                "Inventories fetched successfully"
            );
        } catch (error) {
            return this.error(res, error);
        }
    }

    // READ BY ID
    async findById(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);

            const inventory = await this.inventoryService.findById(id);

            return this.success(
                res,
                inventory,
                "Inventory fetched successfully"
            );
        } catch (error) {
            return this.error(res, error, 404);
        }
    }

    // READ BY WAREHOUSE ID
    async findByWarehouseId(req: Request, res: Response) {
        try {
            const warehouseId = Number(req.query.warehouse_id);

            if (!warehouseId) {
                return this.error(
                    res,
                    new Error("Warehouse ID query parameter is required"),
                    400
                );
            }

            const inventories = await this.inventoryService.findByWarehouseId(
                warehouseId
            );

            return this.success(
                res,
                inventories,
                "Inventories fetched successfully"
            );
        } catch (error) {
            return this.error(res, error);
        }
    }

    // READ BY PRODUCT ID
    async findByProductId(req: Request, res: Response) {
        try {
            const productId = Number(req.query.product_id);

            if (!productId) {
                return this.error(
                    res,
                    new Error("Product ID query parameter is required"),
                    400
                );
            }

            const inventories = await this.inventoryService.findByProductId(
                productId
            );

            return this.success(
                res,
                inventories,
                "Inventories fetched successfully"
            );
        } catch (error) {
            return this.error(res, error);
        }
    }

    // UPDATE
    async update(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);

            const updatedInventory = await this.inventoryService.update(
                id,
                req.body
            );

            return this.success(
                res,
                updatedInventory,
                "Inventory updated successfully"
            );
        } catch (error) {
            return this.error(res, error, 400);
        }
    }

    // DELETE
    async delete(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);

            const deletedInventory = await this.inventoryService.delete(id);

            return this.success(
                res,
                deletedInventory,
                "Inventory deleted successfully"
            );
        } catch (error) {
            return this.error(res, error, 400);
        }
    }
}
