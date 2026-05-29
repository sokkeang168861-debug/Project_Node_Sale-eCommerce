export interface User {
    user_id?: number;

    email: string;

    password: string;

    first_name: string;

    last_name: string;

    is_active?: boolean;

    created_at?: Date;
}