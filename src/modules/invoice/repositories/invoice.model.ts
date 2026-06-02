import Database from "../../../config/db.js";
import { Invoice, Payment } from "../models/invoice.model.js";

export class InvoiceRepository {
    private db = Database.getInstance().getPool();

    async findAll() {
        const [rows] = await this.db.query("SELECT * FROM orders");

        return rows;
    }

    async createPayment(orderId: number, data: Payment) {
        const sql = `
            INSERT INTO payments (
                order_id,
                amount,
                method,
                status,
                transaction_id,
                created_at
            ) VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
        `;

        const values: any[] = [
            orderId,
            data.amount,
            data.method,
            data.status ?? "pending",
            data.transaction_id ?? null
        ];

        const [result] = await this.db.execute(sql, values);

        return result;
    }
}
