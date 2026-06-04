import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export interface TokenPayload {
    id: number;
    role: string;
}

export const generateToken = (
    payload: TokenPayload
) => {
    return jwt.sign(
        payload,
        process.env.JWT_SECRET as string,
        {
            expiresIn: "1d"
        }
    );
};

export const verifyToken = (
    token: string
): TokenPayload => {
    return jwt.verify(
        token,
        process.env.JWT_SECRET as string
    ) as TokenPayload;
};