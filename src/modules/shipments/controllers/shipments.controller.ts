import { Request, Response } from "express";
import { BaseController } from "../../../common/controllers/base.controller.js";
import { ShipmentService } from "../services/shipments.model.js";

export class ShipmentController extends BaseController {
    private shipmentService = new ShipmentService();

    async create(req: Request, res: Response) {
        try {
            const shipment = await this.shipmentService.create(req.body);

            return this.success(res, shipment, "Shipment created successfully", 201);
        } catch (error) {
            return this.error(res, error, 400);
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const shipments = await this.shipmentService.findAll();

            return this.success(res, shipments, "Shipments fetched successfully");
        } catch (error) {
            return this.error(res, error);
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const shipment = await this.shipmentService.findById(req.params.id);

            return this.success(res, shipment, "Shipment fetched successfully");
        } catch (error) {
            return this.error(res, error, 404);
        }
    }

    async update(req: Request, res: Response) {
        try {
            const updatedShipment = await this.shipmentService.update(req.params.id, req.body);

            return this.success(res, updatedShipment, "Shipment updated successfully");
        } catch (error) {
            return this.error(res, error, 400);
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const result = await this.shipmentService.delete(req.params.id);

            return this.success(res, result, "Shipment deleted successfully");
        } catch (error) {
            return this.error(res, error, 400);
        }
    }
}
