export type PaymentStatus =
    | "pending"
    | "paid"
    | "failed"
    | "refunded";

export interface Payment {
    id?: number;
    order_id: number;
    method: string;
    amount: number;
    status?: PaymentStatus;
    transaction_id?: string | null;
    created_at?: string;
}
