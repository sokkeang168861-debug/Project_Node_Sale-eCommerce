export type UserRole = "admin" | "manager" | "staff" | "user" ;

export interface User {
    id?: number;
    first_name: string;
    last_name: string;
    role: UserRole;
    email: string;
    password: string;
    is_active?: boolean;
    created_at?: Date;
}