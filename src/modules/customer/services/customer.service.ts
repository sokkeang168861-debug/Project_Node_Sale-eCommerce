import { Customer } from "../models/customer.model.js";
import { CustomerRepository } from "../repositories/customer.repository.js";

export class CustomerService {
    private customerRepository = new CustomerRepository();

    async create(data: Customer) {
        // check email exists
        const existingCustomer = await this.customerRepository.findByEmail(
            data.contact_email
        );

        if (existingCustomer.length > 0) {
            throw new Error("Email already exists");
        }

        return await this.customerRepository.create(data);
    }

    async findAll() {
        return await this.customerRepository.findAll();
    }

    async findById(id: number) {
        return await this.customerRepository.findById(id);
    }

    async findByStatus(status: string) {
        return await this.customerRepository.findByStatus(status);
    }

    async update(id: number, data: Partial<Customer>) {
        return await this.customerRepository.update(id, data);
    }

    async delete(id: number) {
        return await this.customerRepository.delete(id);
    }
}
