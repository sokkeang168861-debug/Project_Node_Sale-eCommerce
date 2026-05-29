import { User } from "../models/user.model.js";
import { UserRepository } from "../respositories/user.repository";
import bcrypt from "bcrypt"

export class UserService {

    private userRepository = new UserRepository();

    async create(data: User) {

        // check email exists
        const existingUser = await this.userRepository.findByEmail(
            data.email
        );

        if (existingUser.length > 0) {
            throw new Error("Email already exists");
        }

        // hash password
        const saltRounds = 10;

        const hashedPassword = await bcrypt.hash(
            data.password,
            saltRounds
        );

        data.password = hashedPassword;

        return await this.userRepository.create(data);
    }

    async findAll() {
        return await this.userRepository.findAll();
    }

    async findById(id: number) {
        return await this.userRepository.findById(id);
    }

    async update(id: number, data: Partial<User>) {
        return await this.userRepository.update(id, data);
    }

    async delete(id: number) {
        return await this.userRepository.delete(id);
    }
}