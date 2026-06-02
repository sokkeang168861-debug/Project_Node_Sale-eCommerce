import Database from "../../../config/db.js";
import { Order } from "../models/order.model.js";

export class OrderRepository {
    private db = Database.getInstance().getPool();

    async create(data: Order) {
        const sql = `
            INSERT INTO orders (
                customer_id,
                total,
                status
            )
            VALUES (?, ?, ?)
        `;

        const values: any[] = [
            data.customer_id,
            data.total,
            data.status ?? "pending"
        ];

        const [result] = await this.db.execute(sql, values);

        return result;
    }

    async findAll() {
        const [rows] = await this.db.query("SELECT * FROM orders");

        return rows;
    }

    async findById(id: number) {
        const [rows] = await this.db.query(
            "SELECT * FROM orders WHERE id = ?",
            [id]
        );

        return rows;
    }

    async updateStatus(id: number, status: string) {
        const sql = `
            UPDATE orders
            SET status = ?
            WHERE id = ?
        `;

        const [result] = await this.db.execute(sql, [status, id]);

        return result;
    }
}
