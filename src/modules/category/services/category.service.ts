import { Category } from "../models/category.model.js";
import { CategoryRepository } from "../repositories/category.repository.js";

export class CategoryService {
    private categoryRepository = new CategoryRepository();

    async create(data: Category) {
        // check category name exists
        const existingCategory = await this.categoryRepository.findByName(
            data.name
        );

        if (existingCategory.length > 0) {
            throw new Error("Category name already exists");
        }

        return await this.categoryRepository.create(data);
    }

    async findAll() {
        return await this.categoryRepository.findAll();
    }

    async findById(id: number) {
        return await this.categoryRepository.findById(id);
    }

    async findByParentId(parentId: number | null) {
        return await this.categoryRepository.findByParentId(parentId);
    }

    async update(id: number, data: Partial<Category>) {
        return await this.categoryRepository.update(id, data);
    }

    async delete(id: number) {
        return await this.categoryRepository.delete(id);
    }
}
