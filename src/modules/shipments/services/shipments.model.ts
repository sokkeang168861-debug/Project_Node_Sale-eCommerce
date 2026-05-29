import { Shipment, ShipmentStatus } from "../models/shipments.model.js";
import { ShipmentRepository } from "../repositories/shipments.model.js";

export class ShipmentService {
    private shipmentRepository = new ShipmentRepository();
    private validStatuses: ShipmentStatus[] = [
        "pending",
        "shipped",
        "in_transit",
        "delivered",
        "returned"
    ];

    private parseId(id: string | string[] | number) {
        const value =
            typeof id === "string"
                ? Number(id)
                : Array.isArray(id)
                ? Number(id[0])
                : id;

        if (Number.isNaN(value)) {
            throw new Error("Invalid shipment ID");
        }

        return value;
    }

    async create(data: any) {
        const shipment: Shipment = {
            order_id: Number(data.order_id),
            tracking_number: data.tracking_number ?? null,
            carrier: data.carrier ?? null,
            status: data.status ?? "pending"
        };

        if (Number.isNaN(shipment.order_id)) {
            throw new Error("Order ID is required and must be a number");
        }

        if (!this.validStatuses.includes(shipment.status as ShipmentStatus)) {
            throw new Error("Invalid shipment status");
        }

        return await this.shipmentRepository.create(shipment);
    }

    async findAll() {
        return await this.shipmentRepository.findAll();
    }

    async findById(id: string | string[] | number) {
        const shipmentId = this.parseId(id);
        return await this.shipmentRepository.findById(shipmentId);
    }

    async update(id: string | string[] | number, data: Partial<Shipment>) {
        const shipmentId = this.parseId(id);

        if (data.status && !this.validStatuses.includes(data.status as ShipmentStatus)) {
            throw new Error("Invalid shipment status");
        }

        if (data.order_id !== undefined && Number.isNaN(Number(data.order_id))) {
            throw new Error("Order ID must be a number");
        }

        return await this.shipmentRepository.update(shipmentId, data);
    }

    async delete(id: string | string[] | number) {
        const shipmentId = this.parseId(id);
        return await this.shipmentRepository.delete(shipmentId);
    }
}
