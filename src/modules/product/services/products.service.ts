import { Product } from "../models/product.model.js";
import { ProductRepository } from "../repositories/product.repository.js";
import { parseId } from "../../../utils/parseId.js";
import { logActivity } from "../../../common/logger/activity.logger.js";

export class ProductService {
    private productRepository = new ProductRepository();

    async create(data: Product, user: any) {
        const product = await this.productRepository.create(data);

        await logActivity({
            userId: user.id,
            action: "CREATE",
            description: `Created product ${product.name}`,
            entityType: "product",
            entityId: product.id
        })

        return product
    }

    async findAll() {
        return await this.productRepository.findAll();
    }

    async findById(id: string | string[] | number) {
        return await this.productRepository.findById(parseId(id));
    }

    async update(id: string | string[] | number, data: Partial<Product>, user: any) {
        const product = await this.productRepository.update(parseId(id), data);

        await logActivity({
            userId: user.id,
            action: "UPDATE",
            description: `Updated product ${product.name}`,
            entityType: "product",
            entityId: product.id
        });

        return product;
    }

    async delete(id: string | string[] | number, user: any) {
        const parsedId = parseId(id);

        // 1. get product first
        const product = await this.productRepository.findById(parsedId);

        if (!product) {
            throw new Error(`Product ${parsedId} not found`);
        }

        // 2. delete product
        await this.productRepository.delete(parsedId);

        // 3. log activity
        await logActivity({
            userId: user.id,
            action: "DELETE",
            description: `Deleted product ${product.name}`,
            entityType: "product",
            entityId: parsedId
        });

        return {
            id: parsedId,
            deleted: true,
            product
        };
    }
}
