import Database from "../../../config/db.js";
import { Warehouse } from "../models/warehouse.model.js";

export class WarehouseRepository {
    private db = Database.getInstance().getPool();

    async create(data: Warehouse) {
        const sql = `
            INSERT INTO warehouse (
                name,
                address
            ) VALUES (?, ?)
        `;

        const [result] = await this.db.execute(sql, [
            data.name,
            data.address ?? null
        ]);

        return result;
    }

    async findAll() {
        const [rows] = await this.db.query("SELECT * FROM warehouse");
        return rows;
    }

    async findById(id: number) {
        const [rows] = await this.db.query(
            "SELECT * FROM warehouse WHERE id = ?",
            [id]
        );

        return rows;
    }

    async update(id: number, data: Partial<Warehouse>) {
        const sql = `
            UPDATE warehouse
            SET
                name = COALESCE(?, name),
                address = COALESCE(?, address)
            WHERE id = ?
        `;

        const [result] = await this.db.execute(sql, [
            data.name ?? null,
            data.address ?? null,
            id
        ]);

        return result;
    }

    async delete(id: number) {
        const sql = `
            DELETE FROM warehouse
            WHERE id = ?
        `;

        const [result] = await this.db.execute(sql, [id]);

        return result;
    }
}
