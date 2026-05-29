export interface User {
    id?: number;

    first_name: string;

    last_name: string;

    email: string;

    password: string;

    role_id: string;

    is_active?: boolean;

    created_at?: Date;
}