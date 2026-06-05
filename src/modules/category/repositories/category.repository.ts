import Database from "../../../config/db.js";
import { Category } from "../models/category.model.js";
import { RowDataPacket } from "mysql2";

export class CategoryRepository {
    private db = Database.getInstance().getPool();

    async create(data: Category) {
        const sql = `
            INSERT INTO categories (
                name,
                created_at
            )
            VALUES (?, NOW())
        `;

        const values = [
            data.name
        ];

        const [result]: any = await this.db.execute(sql, values);

        return {
            id: result.insertId,
            name: data.name
        };
    }

    async createMany(categories: Category[]) {
        const sql = `
        INSERT INTO categories (name, created_at)
        VALUES ?
    `;

        const values = categories
            .filter(c => c?.name) // REMOVE undefined
            .map(c => [c.name, new Date()]);

        if (values.length === 0) {
            throw new Error("No valid categories");
        }

        const [result] = await this.db.query(sql, [values]);

        return result;
    }
    async findAll() {
        const [rows] = await this.db.query(
            "SELECT * FROM categories ORDER BY id, name"
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

    async update(id: number, data: Partial<Category>) {
        const sql = `
        UPDATE categories
        SET
            name = ?
        WHERE id = ?
    `;

        const values = [
            data.name,
            id
        ];

        const [result]: any = await this.db.execute(sql, values);

        return {
            id: result.insertId,
            name: data.name
        };
    }

    async delete(id: number) {
        // 1. Get category first (for logging)
        const [rows]: any = await this.db.execute(
            "SELECT * FROM categories WHERE id = ?",
            [id]
        );

        const category = rows[0];

        if (!category) {
            return {
                success: false,
                message: "Category not found"
            };
        }

        // 2. Delete category
        await this.db.execute(
            "DELETE FROM categories WHERE id = ?",
            [id]
        );


        return {
            success: true,
            deleted: {
                id: category.id,
                name: category.name
            }
        };
    }

    async findByName(name: string) {
        const [rows] = await this.db.execute<RowDataPacket[]>(
            "SELECT * FROM categories WHERE name = ?",
            [name]
        );
        return rows;
    }
}
