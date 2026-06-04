import { UserRole } from "./user.model.js";

export interface UserResponse {
    id: number;

    first_name: string;
    last_name: string;

    role: UserRole;

    email: string;

    is_active?: boolean;
    created_at?: Date;
}