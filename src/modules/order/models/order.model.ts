export interface Order {
    order_id?: number;
    customer_id: number;
    total_amount: number;
    order_status?: string;
    created_at?: string;
}
