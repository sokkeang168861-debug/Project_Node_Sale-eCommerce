import Database from "../../../config/db.js";
import { Product } from "../models/product.model.js";

export class ProductRepository {
    private db = Database.getInstance().getPool();

    async create(data: Product) {
        const sql = `
            INSERT INTO products (
                name,
                description,
                category_id,
                price,
                stock_quantity
            )
            VALUES (?, ?, ?, ?, ?)
        `;

        const values: (string | number | null)[] = [
            data.name ?? null,
            data.description ?? null,
            data.category_id ?? null,
            data.price ?? null,
            data.stock_quantity ?? null
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
            "SELECT * FROM products WHERE product_id = ?",
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
                category_id = COALESCE(?, category_id),
                price = COALESCE(?, price),
                stock_quantity = COALESCE(?, stock_quantity)
            WHERE product_id = ?
        `;

        const values: (string | number | null)[] = [
            data.name ?? null,
            data.description ?? null,
            data.category_id ?? null,
            data.price ?? null,
            data.stock_quantity ?? null,
            id
        ];

        const [result] = await this.db.execute(sql, values);

        return result;
    }

    async delete(id: number) {
        const sql = `
            DELETE FROM products
            WHERE product_id = ?
        `;

        const [result] = await this.db.execute(sql, [id]);

        return result;
    }
}
