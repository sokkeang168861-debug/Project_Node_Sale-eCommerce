import { Warehouse } from "../models/warehouse.model.js";
import { WarehouseRepository } from "../repositories/warehouse.model.js";

export class WarehouseService {
    private warehouseRepository = new WarehouseRepository();

    async create(data: Warehouse) {
        if (!data.name) {
            throw new Error("Warehouse name is required");
        }

        return await this.warehouseRepository.create(data);
    }

    async findAll() {
        return await this.warehouseRepository.findAll();
    }

    async findById(id: string | string[] | number) {
        const warehouseId = typeof id === "string" ? Number(id) : Array.isArray(id) ? Number(id[0]) : id;

        if (Number.isNaN(warehouseId)) {
            throw new Error("Invalid warehouse ID");
        }

        return await this.warehouseRepository.findById(warehouseId);
    }

    async update(id: string | string[] | number, data: Partial<Warehouse>) {
        const warehouseId = typeof id === "string" ? Number(id) : Array.isArray(id) ? Number(id[0]) : id;

        if (Number.isNaN(warehouseId)) {
            throw new Error("Invalid warehouse ID");
        }

        return await this.warehouseRepository.update(warehouseId, data);
    }

    async delete(id: string | string[] | number) {
        const warehouseId = typeof id === "string" ? Number(id) : Array.isArray(id) ? Number(id[0]) : id;

        if (Number.isNaN(warehouseId)) {
            throw new Error("Invalid warehouse ID");
        }

        return await this.warehouseRepository.delete(warehouseId);
    }
}
