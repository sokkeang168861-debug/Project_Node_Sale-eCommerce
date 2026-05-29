export interface Invoice {
    invoice_id?: number;
    order_id?: number;
    customer_id?: number;
    total?: number;
    status?: string;
    created_at?: string;
}

export interface Payment {
    payment_id?: number;
    order_id: number;
    amount: number;
    method: string;
    status?: string;
    transaction_id?: string;
    created_at?: string;
}
