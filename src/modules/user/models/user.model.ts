export interface User {
    id?: number;

    role_id: number;

    username: string;

    email: string;

    password: string;

    is_active?: boolean;

    created_at?: Date;
}