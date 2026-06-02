import Database from "../../../config/db.js";
import { Shipment } from "../models/shipments.model.js";

export class ShipmentRepository {
    private db = Database.getInstance().getPool();

    async create(data: Shipment) {
        const sql = `
            INSERT INTO shipments (
                order_id,
                tracking_number,
                carrier,
                status
            ) VALUES (?, ?, ?, ?)
        `;

        const [result] = await this.db.execute(sql, [
            data.order_id,
            data.tracking_number ?? null,
            data.carrier ?? null,
            data.status ?? "pending"
        ]);

        return result;
    }

    async findAll() {
        const [rows] = await this.db.query("SELECT * FROM shipments");
        return rows;
    }

    async findById(id: number) {
        const [rows] = await this.db.query(
            "SELECT * FROM shipments WHERE id = ?",
            [id]
        );

        return rows;
    }

    async update(id: number, data: Partial<Shipment>) {
        const sql = `
            UPDATE shipments
            SET
                order_id = COALESCE(?, order_id),
                tracking_number = COALESCE(?, tracking_number),
                carrier = COALESCE(?, carrier),
                status = COALESCE(?, status)
            WHERE id = ?
        `;

        const [result] = await this.db.execute(sql, [
            data.order_id ?? null,
            data.tracking_number ?? null,
            data.carrier ?? null,
            data.status ?? null,
            id
        ]);

        return result;
    }

    async delete(id: number) {
        const sql = `
            DELETE FROM shipments
            WHERE id = ?
        `;

        const [result] = await this.db.execute(sql, [id]);
        return result;
    }
}
