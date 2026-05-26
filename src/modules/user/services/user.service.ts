import { UserRepository } from "../respositories/user.repository.js";

export class UserService {

    private userRepository = new UserRepository();

    async createUser(data: any) {

        // business logic here

        return await this.userRepository.create(data);
    }

    async getUsers() {
        return await this.userRepository.findAll();
    }
}