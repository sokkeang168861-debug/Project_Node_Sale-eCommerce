import Database from "../../../config/db.js";
import { Category } from "../models/category.model.js";
import { RowDataPacket } from "mysql2";

export class CategoryRepository {
    private db = Database.getInstance().getPool();

    async create(data: Category) {

        const sql = `
            INSERT INTO categories (
                name,
                parent_id,
                created_at
            )
            VALUES (?, ?, NOW())
        `;

        const values = [
            data.name,
            data.parent_id ?? null
        ];

        const [result] = await this.db.execute(sql, values);

        return result;
    }

    async findAll() {
        const [rows] = await this.db.query(
            "SELECT * FROM categories ORDER BY parent_id, name"
        );

        return rows;
    }

    async findById(id: number) {
        const [rows] = await this.db.query(
            "SELECT * FROM categories WHERE id = ?",
            [id]
        );

        return rows;
    }

    async findByParentId(parentId: number | null) {
        const [rows] = await this.db.query(
            "SELECT * FROM categories WHERE parent_id = ? ORDER BY name",
            [parentId]
        );

        return rows;
    }

    async update(id: number, data: Partial<Category>) {

        const sql = `
        UPDATE categories
        SET
            name = ?,
            parent_id = ?
        WHERE id = ?
    `;

        const values = [
            data.name,
            data.parent_id ?? null,
            id
        ];

        const [result] = await this.db.execute(sql, values);

        return result;
    }

    async delete(id: number) {

        const sql = `
        DELETE FROM categories
        WHERE id = ?
    `;

        const [result] = await this.db.execute(sql, [id]);

        return result;
    }

    async findByName(name: string) {

        const [rows] = await this.db.execute<RowDataPacket[]>(
            "SELECT * FROM categories WHERE name = ?",
            [name]
        );

        return rows;
    }
}
