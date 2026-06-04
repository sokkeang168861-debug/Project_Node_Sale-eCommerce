import { User } from "./user.model.js";
import { UserResponse } from "./user.response.js";

export const toUserResponse = (user: User): UserResponse => {
    const { password, ...safeUser } = user;
    return safeUser as UserResponse;
};