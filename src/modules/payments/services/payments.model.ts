import { Payment, PaymentStatus } from "../models/payments.model.js";
import { PaymentRepository } from "../repositories/payments.model.js";

export class PaymentService {
    private paymentRepository = new PaymentRepository();
    private validStatuses: PaymentStatus[] = ["pending", "paid", "failed", "refunded"];

    private parseId(id: string | string[] | number) {
        const value =
            typeof id === "string"
                ? Number(id)
                : Array.isArray(id)
                ? Number(id[0])
                : id;

        if (Number.isNaN(value)) {
            throw new Error("Invalid payment ID");
        }

        return value;
    }

    async create(data: any) {
        const status = (data.status ?? "pending") as PaymentStatus;
        const payment: Payment = {
            order_id: Number(data.order_id),
            method: String(data.method),
            amount: Number(data.amount),
            status,
            transaction_id: data.transaction_id ?? null
        };

        if (Number.isNaN(payment.order_id)) {
            throw new Error("Order ID is required and must be a number");
        }

        if (!payment.method) {
            throw new Error("Payment method is required");
        }

        if (Number.isNaN(payment.amount)) {
            throw new Error("Payment amount is required and must be a number");
        }

        if (!this.validStatuses.includes(status)) {
            throw new Error("Invalid payment status");
        }

        return await this.paymentRepository.create(payment);
    }

    async findAll() {
        return await this.paymentRepository.findAll();
    }

    async findById(id: string | string[] | number) {
        const paymentId = this.parseId(id);
        return await this.paymentRepository.findById(paymentId);
    }

    async update(id: string | string[] | number, data: Partial<Payment>) {
        const paymentId = this.parseId(id);

        if (data.order_id !== undefined && Number.isNaN(Number(data.order_id))) {
            throw new Error("Order ID must be a number");
        }

        if (data.amount !== undefined && Number.isNaN(Number(data.amount))) {
            throw new Error("Payment amount must be a number");
        }

        if (data.status !== undefined && !this.validStatuses.includes(data.status as PaymentStatus)) {
            throw new Error("Invalid payment status");
        }

        return await this.paymentRepository.update(paymentId, data);
    }

    async delete(id: string | string[] | number) {
        const paymentId = this.parseId(id);
        return await this.paymentRepository.delete(paymentId);
    }
}
