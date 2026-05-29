import { Order } from "../models/order.model.js";
import { OrderRepository } from "../repositories/order.model.js";

export class OrderService {
    private orderRepository = new OrderRepository();

    async create(data: Order) {
        return await this.orderRepository.create(data);
    }

    async findAll() {
        return await this.orderRepository.findAll();
    }

    async findById(id: number) {
        return await this.orderRepository.findById(id);
    }

    async confirm(id: number) {
        return await this.orderRepository.updateStatus(id, "confirmed");
    }

    async cancel(id: number) {
        return await this.orderRepository.updateStatus(id, "cancelled");
    }
}
