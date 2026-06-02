import Database from "../../../config/db.js";
import { Role } from "../models/role.model.js";
import { RowDataPacket } from "mysql2";

export class RoleRepository {
    private db = Database.getInstance().getPool();

    async create(data: Role) {

        const sql = `
            INSERT INTO roles (
                name,
                permissions
            )
            VALUES (?, ?)
        `;

        const values = [
            data.name,
            JSON.stringify(data.permissions ?? null)
        ];

        const [result] = await this.db.execute(sql, values);

        return result;
    }

    async findAll() {
        const [rows] = await this.db.query(
            "SELECT * FROM roles"
        );

        return rows;
    }

    async findById(id: number) {
        const [rows] = await this.db.query(
            "SELECT * FROM roles WHERE id = ?",
            [id]
        );

        return rows;
    }

    async update(id: number, data: Partial<Role>) {
        const fields = Object.entries(data).filter(([, value]) => value !== undefined);

        if (fields.length === 0) {
            return { affectedRows: 0 };
        }

        const setClause = fields.map(([key]) => {
            if (key === "permissions") {
                return `${key} = JSON(?)`;
            }

            return `${key} = ?`;
        }).join(", ");

        const values = fields.map(([, value]) => {
            if (value && typeof value === "object" && !(value instanceof Date)) {
                return JSON.stringify(value);
            }

            return value;
        });

        const sql = `
            UPDATE roles
            SET ${setClause}
            WHERE id = ?
        `;

        const [result] = await this.db.execute(sql, [...values, id]);

        return result;
    }

    async delete(id: number) {

        const sql = `
            DELETE FROM roles
            WHERE id = ?
        `;

        const [result] = await this.db.execute(sql, [id]);

        return result;
    }

    async findByName(name: string) {

        const [rows] = await this.db.execute<RowDataPacket[]>(
            "SELECT * FROM roles WHERE name = ?",
            [name]
        );

        return rows;
    }
}