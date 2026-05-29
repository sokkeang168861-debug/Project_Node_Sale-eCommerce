import { Product } from "../models/product.model.js";
import { ProductRepository } from "../repositories/product.model.js";
import { parseId } from "../../../utils/parseId";

export class ProductService {
    private productRepository = new ProductRepository();

    async create(data: Product) {
        return await this.productRepository.create(data);
    }

    async findAll() {
        return await this.productRepository.findAll();
    }

    async findById(id: string | string[] | number) {
        return await this.productRepository.findById(parseId(id));
    }

    async update(id: string | string[] | number, data: Partial<Product>) {
        return await this.productRepository.update(parseId(id), data);
    }

    async delete(id: string | string[] | number) {
        return await this.productRepository.delete(parseId(id));
    }
}
