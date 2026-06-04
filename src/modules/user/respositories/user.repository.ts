import Database from "../../../config/db.js";
import { User } from "../models/user.model.js";
import { RowDataPacket } from "mysql2";

export class UserRepository {
    private db = Database.getInstance().getPool();

    // Create user (Register) only admin can 
    async create(data: User) {
        const sql = `
        INSERT INTO users (first_name, last_name, role, email, password, is_active)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

        const values = [
            data.first_name,
            data.last_name,
            data.role,
            data.email,
            data.password,
            data.is_active ?? true
        ];

        const [result]: any = await this.db.execute(sql, values);

        return {
            id: result.insertId,
            first_name: data.first_name,
            last_name: data.last_name,
            role: data.role,
            email: data.email,
            is_active: data.is_active ?? true
        };
    }

    // Find all user but not include password for security
    async findAll() {
        const [rows] = await this.db.query(
            "SELECT id, first_name, last_name, role, email, is_active, created_at FROM users "
        );

        return rows;
    }
    // Find user by id 
    async findById(id: number) {
        const [rows] = await this.db.query(
            "SELECT id, first_name, last_name, role, email, is_active, created_at FROM users WHERE id = ?",
            [id]
        );

        return (rows as any[])[0] || null;
    }

    // update user 
    async updated(id: number, data: Partial<User>) {
        const cleanData = Object.fromEntries(
            Object.entries(data).filter(
                ([, value]) => value !== undefined
            )
        );

        const allowedFields = [
            "first_name",
            "last_name",
            "role",
            "email",
            "is_active"
        ];

        const fields = Object.keys(cleanData).filter(f => allowedFields.includes(f));

        if (fields.length === 0) {
            throw new Error("No valid fields to update");
        }

        const values = fields.map(f => cleanData[f]);

        const setClause = fields.map(f => `${f} = ?`).join(", ");

        const sql = `UPDATE users SET ${setClause} WHERE id = ?`

        const [result] = await this.db.execute(sql, [...values, id]);
    }

    // delete user 
    async delete(id: number) {

        const sql = `
        DELETE FROM users
        WHERE id = ?
    `;

        const [result] = await this.db.execute(sql, [id]);

        return result;
    }

    // find user for handle logic
    async findByEmail(email: string) {

        const [rows] = await this.db.execute<RowDataPacket[]>(
            "SELECT * FROM users WHERE email = ?",
            [email]
        );

        return (rows as any[])[0] || null;
    }
}