import { Category } from "../models/category.model.js";
import { CategoryRepository } from "../repositories/category.repository.js";
import { logActivity } from "../../../common/logger/activity.logger.js";

export class CategoryService {
    private categoryRepository = new CategoryRepository();

    async create(data: Category, user: any) {
        // check category name exists
        const existingCategory = await this.categoryRepository.findByName(
            data.name
        );

        if (existingCategory.length > 0) {
            throw new Error("Category name already exists");
        }

        const category = await this.categoryRepository.create(data);

        await logActivity({
            userId: user.id,
            action: "Created",
            description: `Created Category ${category.name}`,
            entityType: "category",
            entityId: category.id,
        });

        return category;
    }

    async findAll() {
        return await this.categoryRepository.findAll();
    }

    async findById(id: number) {
        return await this.categoryRepository.findById(id);
    }

    async update(id: number, data: Partial<Category>, user: any) {
        const category =  await this.categoryRepository.update(id, data);

        await logActivity({
            userId: user.id,
            action: "Updat",
            description: `Updated category ${category.name}`,
            entityType: "category",
            entityId: category.id
        })
    }

    async delete(id: number, user: any) {
        const category = await this.categoryRepository.delete(id);

        await logActivity({
            userId: user.id,
            action: "Created",
            description: `Created Category ${category.deleted?.name}`,
            entityType: "category",
            entityId: category.deleted?.id,
        });

        return category
    }
}
