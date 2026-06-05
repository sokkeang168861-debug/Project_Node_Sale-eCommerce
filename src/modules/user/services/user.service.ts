import { User } from "../models/user.model.js";
import { UserRepository } from "../respositories/user.repository";
import bcrypt from "bcrypt";
import { parseId } from "../../../utils/parseId";

export class UserService {

    private userRepository = new UserRepository();

    async create(data: any) {
        if (!data.first_name || !data.last_name || !data.email || !data.password) {
            throw new Error("Missing required fields");
        }

        const hashedPassword = await bcrypt.hash(data.password, 10);

        return await this.userRepository.register({
            ...data,
            password: hashedPassword
        });
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

        if (data.password) {
            const saltRounds = 10;

            data.password = await bcrypt.hash(
                data.password,
                saltRounds
            );
        }

        return await this.userRepository.updated(userId, data);
    }

    async delete(id: string | string[] | number) {
        return await this.userRepository.delete(parseId(id));
    }
}