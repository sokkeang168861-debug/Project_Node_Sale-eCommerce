import Database from "../../../config/db.js";
import { Payment } from "../models/payments.model.js";

export class PaymentRepository {
    private db = Database.getInstance().getPool();

    async create(data: Payment) {
        const sql = `
            INSERT INTO payments (
                order_id,
                method,
                amount,
                status,
                transaction_id,
                created_at
            ) VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
        `;

        const [result] = await this.db.execute(sql, [
            data.order_id,
            data.method,
            data.amount,
            data.status ?? "pending",
            data.transaction_id ?? null
        ]);

        return result;
    }

    async findAll() {
        const [rows] = await this.db.query("SELECT * FROM payments");
        return rows;
    }

    async findById(id: number) {
        const [rows] = await this.db.query(
            "SELECT * FROM payments WHERE id = ?",
            [id]
        );

        return rows;
    }

    async update(id: number, data: Partial<Payment>) {
        const sql = `
            UPDATE payments
            SET
                order_id = COALESCE(?, order_id),
                method = COALESCE(?, method),
                amount = COALESCE(?, amount),
                status = COALESCE(?, status),
                transaction_id = COALESCE(?, transaction_id)
            WHERE id = ?
        `;

        const [result] = await this.db.execute(sql, [
            data.order_id ?? null,
            data.method ?? null,
            data.amount ?? null,
            data.status ?? null,
            data.transaction_id ?? null,
            id
        ]);

        return result;
    }

    async delete(id: number) {
        const [result] = await this.db.execute(
            "DELETE FROM payments WHERE id = ?",
            [id]
        );

        return result;
    }
}
