import { InvoiceRepository } from "../repositories/invoice.model.js";
import { Payment } from "../models/invoice.model.js";

export class InvoiceService {
    private invoiceRepository = new InvoiceRepository();

    async findAll() {
        return await this.invoiceRepository.findAll();
    }

    async createPayment(orderId: number, payment: Payment) {
        return await this.invoiceRepository.createPayment(orderId, payment);
    }
}
