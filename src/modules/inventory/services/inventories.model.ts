import { InventoryRepository } from "../repositories/inventory.model.js";

export class InventoryService {
    private inventoryRepository = new InventoryRepository();

    async findAll() {
        return await this.inventoryRepository.findAll();
    }

    async adjust(sku: string | string[] | number, adjustment: string | string[] | number) {
        const skuValue = typeof sku === "string" ? Number(sku) : Array.isArray(sku) ? Number(sku[0]) : sku;
        const adjustmentValue = typeof adjustment === "string" ? Number(adjustment) : Array.isArray(adjustment) ? Number(adjustment[0]) : adjustment;

        if (Number.isNaN(skuValue) || Number.isNaN(adjustmentValue)) {
            throw new Error("Invalid SKU or adjustment value");
        }

        return await this.inventoryRepository.adjustBySku(skuValue, adjustmentValue);
    }
}
