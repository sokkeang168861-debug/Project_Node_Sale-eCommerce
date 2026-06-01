export interface Inventory {
    id?: number;
    warehouse_id: number;
    product_id: number;
    quantity: number;
    stock_quantity: number;
    created_at?: Date;
}
