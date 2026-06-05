import { Customer } from "../models/customer.model.js";
import { CustomerRepository } from "../repositories/customer.repository.js";
import { parseId } from "../../../utils/parseId.js";
import { logActivity } from "../../../common/logger/activity.logger.js";

export class CustomerService {
    private customerRepository = new CustomerRepository();

    async create(data: Customer) {
        return await this.customerRepository.create(data);
    }

    async findAll() {
        return await this.customerRepository.findAll();
    }

    async findById(id: string | string[] | number) {
        return await this.customerRepository.findById(parseId(id));
    }

    async findByUserId(userId: string | string[] | number) {
        return await this.customerRepository.findByUserId(parseId(userId));
    }

    async update(id: string | string[] | number, data: Partial<Customer>, user: any) {
        const customer =  await this.customerRepository.update(parseId(id), data);

        await logActivity({
            userId: user.id,
            action: "UPDATE",
            description: `Updated customer ${customer}`
        })
    }

    async delete(id: string | string[] | number, user: any) {
        return await this.customerRepository.delete(parseId(id));
    }
}
