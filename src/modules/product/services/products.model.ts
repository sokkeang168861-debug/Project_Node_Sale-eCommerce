import { Product } from "../models/product.model.js";
import { ProductRepository } from "../repositories/product.model.js";

export class ProductService {
    private productRepository = new ProductRepository();

    async create(data: Product) {
        return await this.productRepository.create(data);
    }

    async findAll() {
        return await this.productRepository.findAll();
    }

    async findById(id: number) {
        return await this.productRepository.findById(id);
    }

    async update(id: number, data: Partial<Product>) {
        return await this.productRepository.update(id, data);
    }

    async delete(id: number) {
        return await this.productRepository.delete(id);
    }
}
