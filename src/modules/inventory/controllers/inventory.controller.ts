import { Request, Response } from "express";
import { BaseController } from "../../user/controllers/base.controller.js";
import { InventoryService } from "../services/inventories.model.js";

export class InventoryController extends BaseController {
    private inventoryService = new InventoryService();

    async findAll(req: Request, res: Response) {
        try {
            const inventory = await this.inventoryService.findAll();

            return this.success(
                res,
                inventory,
                "Inventory fetched successfully"
            );
        } catch (error) {
            return this.error(res, error);
        }
    }

    async adjust(req: Request, res: Response) {
        try {
            const sku = Number(req.params.sku);
            const adjustment = Number(req.body.adjustment);

            if (Number.isNaN(sku) || Number.isNaN(adjustment)) {
                throw new Error("Invalid SKU or adjustment value");
            }

            const result = await this.inventoryService.adjust(sku, adjustment);

            return this.success(
                res,
                result,
                "Inventory adjusted successfully"
            );
        } catch (error) {
            return this.error(res, error, 400);
        }
    }
}
