import Database from "../../config/db.js";

const db = Database.getInstance().getPool();

export async function logActivity({
    userId,
    action,
    description,
    entityType,
    entityId
}: any) {
    await db.execute(
        `
        INSERT INTO activity_logs 
        (user_id, action, description, entity_type, entity_id)
        VALUES (?, ?, ?, ?, ?)
        `,
        [userId, action, description, entityType, entityId]
    );
}