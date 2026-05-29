import { InventoryRepository } from "../repositories/inventory.model.js";

export class InventoryService {
    private inventoryRepository = new InventoryRepository();

    async findAll() {
        return await this.inventoryRepository.findAll();
    }

    async adjust(sku: number, adjustment: number) {
        return await this.inventoryRepository.adjustBySku(sku, adjustment);
    }
}
