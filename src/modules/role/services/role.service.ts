import { Role } from "../models/role.model.js";
import { RoleRepository } from "../respositories/role.repository.js";
import { parseId } from "../../../utils/parseId";

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

    async findById(id: string | string[] | number) {
        return await this.roleRepository.findById(parseId(id));
    }

    async update(id: string | string[] | number, data: Partial<Role>) {
        const roleId = parseId(id);

        if (data.name) {
            const existingRole = await this.roleRepository.findByName(data.name);

            if (existingRole.length > 0 && existingRole[0].id !== roleId) {
                throw new Error("Role name already exists");
            }
        }

        return await this.roleRepository.update(roleId, data);
    }

    async delete(id: string | string[] | number) {
        return await this.roleRepository.delete(parseId(id));
    }
}