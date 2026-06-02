import { Order } from "../models/order.model.js";
import { OrderRepository } from "../repositories/order.model.js";
import { parseId } from "../../../utils/parseId";

export class OrderService {
    private orderRepository = new OrderRepository();

    async create(data: Order) {
        return await this.orderRepository.create(data);
    }

    async findAll() {
        return await this.orderRepository.findAll();
    }

    async findById(id: string | string[] | number) {
        return await this.orderRepository.findById(parseId(id));
    }

    async confirm(id: string | string[] | number) {
        return await this.orderRepository.updateStatus(parseId(id), "confirmed");
    }

    async cancel(id: string | string[] | number) {
        return await this.orderRepository.updateStatus(parseId(id), "cancelled");
    }
}
