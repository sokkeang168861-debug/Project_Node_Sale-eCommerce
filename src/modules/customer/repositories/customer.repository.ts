import Database from "../../../config/db.js";
import { Customer } from "../models/customer.model.js";
import { RowDataPacket } from "mysql2";

export class CustomerRepository {
    private db = Database.getInstance().getPool();

    async create(data: Customer) {
        const sql = `
            INSERT INTO customers (
                company_name,
                contact_email,
                phone,
                address,
                status,
                created_at
            )
            VALUES (?, ?, ?, ?, ?, NOW())
        `;

        const values = [
            data.company_name,
            data.contact_email,
            data.phone,
            data.address,
            data.status
        ];

        const [result] = await this.db.execute(sql, values);
        return result;
    }

    async findAll() {
        const [rows] = await this.db.query(
            "SELECT * FROM customers ORDER BY created_at DESC"
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

    async findByEmail(email: string) {
        const [rows] = await this.db.execute<RowDataPacket[]>(
            "SELECT * FROM customers WHERE contact_email = ?",
            [email]
        );
        return rows;
    }

    async findByStatus(status: string) {
        const [rows] = await this.db.query(
            "SELECT * FROM customers WHERE status = ? ORDER BY created_at DESC",
            [status]
        );
        return rows;
    }

    async update(id: number, data: Partial<Customer>) {
        const sql = `
            UPDATE customers
            SET
                company_name = ?,
                contact_email = ?,
                phone = ?,
                address = ?,
                status = ?
            WHERE id = ?
        `;

        const values = [
            data.company_name,
            data.contact_email,
            data.phone,
            data.address,
            data.status,
            id
        ];

        const [result] = await this.db.execute(sql, values);
        return result;
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
