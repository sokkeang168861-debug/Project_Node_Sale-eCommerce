import Database from "../../../config/db.js";
import { Product } from "../models/product.model.js";

export class ProductRepository {
    private db = Database.getInstance().getPool();

    async create(data: Product) {
        const sql = `
            INSERT INTO products (
                name,
                description,
                price,
                category_id
            )
            VALUES (?, ?, ?, ?)
        `;

        const values: (string | number | null)[] = [
            data.name,
            data.description ?? null,
            data.price,
            data.category_id
        ];

        const [result] = await this.db.execute(sql, values);

        return result;
    }

    async findAll() {
        const [rows] = await this.db.query(
            "SELECT * FROM products"
        );

        return rows;
    }

    async findById(id: number) {
        const [rows] = await this.db.query(
            "SELECT * FROM products WHERE id = ?",
            [id]
        );

        return rows;
    }

    async update(id: number, data: Partial<Product>) {
        const sql = `
            UPDATE products
            SET
                name = COALESCE(?, name),
                description = COALESCE(?, description),
                price = COALESCE(?, price),
                category_id = COALESCE(?, category_id)
            WHERE id = ?
        `;

        const values: (string | number | null)[] = [
            data.name ?? null,
            data.description ?? null,
            data.price ?? null,
            data.category_id ?? null,
            id
        ];

        const [result] = await this.db.execute(sql, values);

        return result;
    }

    async delete(id: number) {
        const sql = `
            DELETE FROM products
            WHERE id = ?
        `;

        const [result] = await this.db.execute(sql, [id]);

        return result;
    }
}
