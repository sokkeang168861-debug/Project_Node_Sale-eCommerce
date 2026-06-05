import Database from "../../../config/db.js";
import { Customer } from "../models/customer.model.js";

export class CustomerRepository {
    private db = Database.getInstance().getPool();

    async create(data: Customer) {
        const sql = `
            INSERT INTO customers (
                user_id,
                name,
                phone,
                address
            )
            VALUES (?, ?, ?, ?)
        `;

        const values: (string | number | null)[] = [
            data.user_id,
            data.name,
            data.phone,
            data.address
        ];

        const [result] = await this.db.execute(sql, values);

        return result;
    }

    async findAll() {
        const [rows] = await this.db.query(
            "SELECT * FROM customers"
        );

        return rows;
    }

    async findById(id: number) {
        const [rows] = await this.db.query(
            "SELECT * FROM customers WHERE id = ?",
            [id]
        );

        return rows;
    }

    async findByUserId(userId: number) {
        const [rows] = await this.db.query(
            "SELECT * FROM customers WHERE user_id = ?",
            [userId]
        );

        return rows;
    }

    async update(id: number, data: Partial<Customer>) {
        const sql = `
            UPDATE customers
            SET
                user_id = COALESCE(?, user_id),
                name = COALESCE(?, name),
                phone = COALESCE(?, phone),
                address = COALESCE(?, address),
                updated_at = NOW()
            WHERE id = ?
        `;

        const values: (string | number | null)[] = [
            data.user_id ?? null,
            data.name ?? null,
            data.phone ?? null,
            data.address ?? null,
            id
        ];

        const [result] = await this.db.execute(sql, values);

        return {
            id: id,
            name: data.name
        };
    }

    async delete(id: number) {
        const sql = `
            DELETE FROM customers
            WHERE id = ?
        `;

        const [result] = await this.db.execute(sql, [id]);

        return result;
    }
}
