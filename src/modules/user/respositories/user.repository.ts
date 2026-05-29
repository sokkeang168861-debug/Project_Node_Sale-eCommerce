import Database from "../../../config/db.js";
import { User } from "../models/user.model.js";
import { RowDataPacket } from "mysql2";

export class UserRepository {
    private db = Database.getInstance().getPool();

    async create(data: User) {

        const sql = `
            INSERT INTO users (
                first_name,
                last_name,
                email,
                password,
                role_id,
                is_active,
                created_at
            )
            VALUES (?, ?, ?, ?, ?, ?, NOW())
        `;

        const values = [
            data.first_name,
            data.last_name,
            data.email,
            data.password,
            data.role_id,
            data.is_active ?? true
        ];

        const [result] = await this.db.execute(sql, values);

        return result;
    }

    async findAll() {
        const [rows] = await this.db.query(
            "SELECT * FROM users"
        );

        return rows;
    }

    async findById(id: number) {
        const [rows] = await this.db.query(
            "SELECT * FROM users WHERE id = ?",
            [id]
        );

        return rows;
    }

    async update(id: number, data: any) {

        const sql = `
        UPDATE users
        SET
            first_name = ?,
            last_name = ?,
            email = ?,
            password = ?,
            role_id = ?,
            is_active = ?
        WHERE id = ?
    `;

        const values = [
            data.first_name,
            data.last_name,
            data.email,
            data.password,
            data.role_id,
            data.is_active,
            id
        ];

        const [result] = await this.db.execute(sql, values);

        return result;
    }

    async delete(id: number) {

        const sql = `
        DELETE FROM users
        WHERE id = ?
    `;

        const [result] = await this.db.execute(sql, [id]);

        return result;
    }
    async findByEmail(email: string) {

        const [rows] = await this.db.execute<RowDataPacket[]>(
            "SELECT * FROM users WHERE email = ?",
            [email]
        );

        return rows;
    }
}         


