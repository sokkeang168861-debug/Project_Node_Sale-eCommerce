export interface Customer {
    id?: number;
    company_name: string;
    contact_email: string;
    phone: string;
    address: string;
    status: "active" | "inactive";
    created_at?: Date;
}
