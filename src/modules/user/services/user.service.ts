import { User } from "../models/user.model.js";
import { UserRepository } from "../respositories/user.repository";
import bcrypt from "bcrypt";
import { parseId } from "../../../utils/parseId";

export class UserService {

    private userRepository = new UserRepository();

    async create(data: User) {
        const normalizedData: User = {
            ...data,
            is_active: data.is_active ?? true
        };

        const existingEmail = await this.userRepository.findByEmail(
            normalizedData.email
        );

        if (existingEmail.length > 0) {
            throw new Error("Email already exists");
        }

        const existingUsername = await this.userRepository.findByUsername(
            normalizedData.username
        );

        if (existingUsername.length > 0) {
            throw new Error("Username already exists");
        }

        const saltRounds = 10;

        const hashedPassword = await bcrypt.hash(
            normalizedData.password,
            saltRounds
        );

        normalizedData.password = hashedPassword;

        return await this.userRepository.create(normalizedData);
    }

    async findAll() {
        return await this.userRepository.findAll();
    }

    async findById(id: string | string[] | number) {
        return await this.userRepository.findById(parseId(id));
    }

    async update(id: string | string[] | number, data: Partial<User>) {
        const userId = parseId(id);

        if (data.email) {
            const existingEmail = await this.userRepository.findByEmail(data.email);

            if (existingEmail.length > 0 && existingEmail[0].id !== userId) {
                throw new Error("Email already exists");
            }
        }

        if (data.username) {
            const existingUsername = await this.userRepository.findByUsername(data.username);

            if (existingUsername.length > 0 && existingUsername[0].id !== userId) {
                throw new Error("Username already exists");
            }
        }

        if (data.password) {
            const saltRounds = 10;

            data.password = await bcrypt.hash(
                data.password,
                saltRounds
            );
        }

        return await this.userRepository.update(userId, data);
    }

    async delete(id: string | string[] | number) {
        return await this.userRepository.delete(parseId(id));
    }
}