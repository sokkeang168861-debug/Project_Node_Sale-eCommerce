import { Role } from "../models/role.model.js";
import { RoleRepository } from "../respositories/role.repository.js";

export class RoleService {

    private roleRepository = new RoleRepository();

    async create(data: Role) {

        const existingRole = await this.roleRepository.findByName(data.name);

        if (existingRole.length > 0) {
            throw new Error("Role name already exists");
        }

        return await this.roleRepository.create(data);
    }

    async findAll() {
        return await this.roleRepository.findAll();
    }

    async findById(id: number) {
        return await this.roleRepository.findById(id);
    }

    async update(id: number, data: Partial<Role>) {

        if (data.name) {
            const existingRole = await this.roleRepository.findByName(data.name);

            if (existingRole.length > 0 && existingRole[0].id !== id) {
                throw new Error("Role name already exists");
            }
        }

        return await this.roleRepository.update(id, data);
    }

    async delete(id: number) {
        return await this.roleRepository.delete(id);
    }
}