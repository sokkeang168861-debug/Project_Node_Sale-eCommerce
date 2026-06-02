import Database from "../../../config/db.js";
import { User } from "../models/user.model.js";
import { RowDataPacket } from "mysql2";

export class UserRepository {
    private db = Database.getInstance().getPool();

    async create(data: User) {

        const sql = `
            INSERT INTO users (
                role_id,
                username,
                email,
                password,
                is_active
            )
            VALUES (?, ?, ?, ?, ?)
        `;

        const values = [
            data.role_id,
            data.username,
            data.email,
            data.password,
            data.is_active ?? true
        ];

        const [result]: any = await this.db.execute(sql, values);

        return {
            id: result.insertId,
            ...data
        };
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

    async update(id: number, data: Partial<User>) {
        const fields = Object.entries(data).filter(([, value]) => value !== undefined);

        if (fields.length === 0) {
            return { affectedRows: 0 };
        }

        const setClause = fields.map(([key]) => `${key} = ?`).join(", ");
        const values = fields.map(([, value]) => value);

        const sql = `
            UPDATE users
            SET ${setClause}
            WHERE id = ?
        `;

        const [result] = await this.db.execute(sql, [...values, id]);

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

        return (rows as any[])[0] || null;
    }

    async findByUsername(username: string) {

        const [rows] = await this.db.execute<RowDataPacket[]>(
            "SELECT * FROM users WHERE username = ?",
            [username]
        );

        return (rows as any[])[0] || null;
    }
}