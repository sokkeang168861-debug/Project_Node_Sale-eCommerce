import Database from "../../../config/db.js";
import { Inventory } from "../models/inventory.model.js";
import { RowDataPacket } from "mysql2";

export class InventoryRepository {
    private db = Database.getInstance().getPool();

    async create(data: Inventory) {
        const sql = `
            INSERT INTO inventories (
                warehouse_id,
                product_id,
                quantity,
                stock_quantity,
                created_at
            )
            VALUES (?, ?, ?, ?, NOW())
        `;

        const values = [
            data.warehouse_id,
            data.product_id,
            data.quantity,
            data.stock_quantity
        ];

        const [result] = await this.db.execute(sql, values);
        return result;
    }

    async findAll() {
        const [rows] = await this.db.query(
            "SELECT * FROM inventories ORDER BY created_at DESC"
        );
        return rows;
    }

    async findById(id: number) {
        const [rows] = await this.db.query(
            "SELECT * FROM inventories WHERE id = ?",
            [id]
        );
        return rows;
    }

    async findByWarehouseId(warehouseId: number) {
        const [rows] = await this.db.query(
            "SELECT * FROM inventories WHERE warehouse_id = ? ORDER BY created_at DESC",
            [warehouseId]
        );
        return rows;
    }

    async findByProductId(productId: number) {
        const [rows] = await this.db.query(
            "SELECT * FROM inventories WHERE product_id = ? ORDER BY created_at DESC",
            [productId]
        );
        return rows;
    }

    async findByWarehouseAndProduct(warehouseId: number, productId: number) {
        const [rows] = await this.db.query(
            "SELECT * FROM inventories WHERE warehouse_id = ? AND product_id = ?",
            [warehouseId, productId]
        );
        return rows;
    }

    async update(id: number, data: Partial<Inventory>) {
        const sql = `
            UPDATE inventories
            SET
                warehouse_id = ?,
                product_id = ?,
                quantity = ?,
                stock_quantity = ?
            WHERE id = ?
        `;

        const values = [
            data.warehouse_id,
            data.product_id,
            data.quantity,
            data.stock_quantity,
            id
        ];

        const [result] = await this.db.execute(sql, values);
        return result;
    }

    async delete(id: number) {
        const sql = `
            DELETE FROM inventories
            WHERE id = ?
        `;

        const [result] = await this.db.execute(sql, [id]);
        return result;
    }
}
