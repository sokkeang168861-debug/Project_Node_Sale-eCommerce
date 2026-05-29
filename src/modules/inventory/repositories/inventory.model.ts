import Database from "../../../config/db.js";
import { Inventory } from "../models/inventory.model.js";

export class InventoryRepository {
    private db = Database.getInstance().getPool();

    async findAll() {
        const [rows] = await this.db.query("SELECT * FROM inventories");

        return rows;
    }

    async adjustBySku(sku: number, adjustment: number) {
        const sql = `
            UPDATE inventories
            SET quantity = quantity + ?,
                updated_at = CURRENT_TIMESTAMP
            WHERE product_id = ?
        `;

        const values: any[] = [adjustment, sku];

        const [result] = await this.db.execute(sql, values);

        return result;
    }
}
