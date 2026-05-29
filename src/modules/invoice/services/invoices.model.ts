import { InvoiceRepository } from "../repositories/invoice.model.js";
import { Payment } from "../models/invoice.model.js";

export class InvoiceService {
    private invoiceRepository = new InvoiceRepository();

    async findAll() {
        return await this.invoiceRepository.findAll();
    }

    async createPayment(orderId: string | string[] | number, paymentData: any) {
        const orderValue = typeof orderId === "string" ? Number(orderId) : Array.isArray(orderId) ? Number(orderId[0]) : orderId;

        if (Number.isNaN(orderValue)) {
            throw new Error("Invalid order ID");
        }

        const payment: Payment = {
            order_id: orderValue,
            amount: Number(paymentData.amount),
            method: String(paymentData.method),
            status: paymentData.status ?? "pending",
            transaction_id: paymentData.transaction_id ?? null
        };

        if (Number.isNaN(payment.amount) || !payment.method) {
            throw new Error("Invalid payment data");
        }

        return await this.invoiceRepository.createPayment(orderValue, payment);
    }
}
