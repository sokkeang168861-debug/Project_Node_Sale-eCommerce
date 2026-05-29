export interface Inventory {
    inventory_id?: number;
    product_id: number;
    warehouse_id?: number;
    quantity_on_hand: number;
    reorder_level?: number;
    updated_at?: string;
}
