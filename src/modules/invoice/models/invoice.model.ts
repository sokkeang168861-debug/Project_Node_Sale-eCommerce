export interface Invoice {
    invoice_id?: number;
    order_id?: number;
    customer_id?: number;
    total_amount?: number;
    order_status?: string;
    created_at?: string;
}

export interface Payment {
    payment_id?: number;
    order_id: number;
    amount: number;
    payment_method: string;
    payment_status?: string;
    transaction_id?: string;
    created_at?: string;
}
