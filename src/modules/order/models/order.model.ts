export interface Order {
    id?: number;
    customer_id: number;
    total: number;
    status?: string;
    created_at?: string;
}
