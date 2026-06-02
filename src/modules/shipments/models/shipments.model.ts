export type ShipmentStatus =
    | "pending"
    | "shipped"
    | "in_transit"
    | "delivered"
    | "returned";

export interface Shipment {
    id?: number;
    order_id: number;
    tracking_number?: string | null;
    carrier?: string | null;
    status?: ShipmentStatus;
    created_at?: string;
}
