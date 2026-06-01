import { Inventory } from "../models/inventory.model.js";
import { InventoryRepository } from "../repositories/inventory.repository.js";

export class InventoryService {
    private inventoryRepository = new InventoryRepository();

    async create(data: Inventory) {
        // check if inventory already exists for this warehouse and product
        const existingInventory = await this.inventoryRepository.findByWarehouseAndProduct(
            data.warehouse_id,
            data.product_id
        );

        if (existingInventory.length > 0) {
            throw new Error("Inventory already exists for this warehouse and product");
        }

        return await this.inventoryRepository.create(data);
    }

    async findAll() {
        return await this.inventoryRepository.findAll();
    }

    async findById(id: number) {
        return await this.inventoryRepository.findById(id);
    }

    async findByWarehouseId(warehouseId: number) {
        return await this.inventoryRepository.findByWarehouseId(warehouseId);
    }

    async findByProductId(productId: number) {
        return await this.inventoryRepository.findByProductId(productId);
    }

    async update(id: number, data: Partial<Inventory>) {
        return await this.inventoryRepository.update(id, data);
    }

    async delete(id: number) {
        return await this.inventoryRepository.delete(id);
    }
}
