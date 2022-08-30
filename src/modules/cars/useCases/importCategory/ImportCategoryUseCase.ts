import { inject, injectable } from 'tsyringe';

import loadCategories from '../../../../utils/loadCategories';
import { ICategoriesRepository } from '../../repositories/implementations/ICategoriesRepository';

@injectable()
class ImportCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await loadCategories(file);

    categories.map(async (category) => {
      const { name, description } = category;

      const existCategory = await this.categoriesRepository.findByName(name);

      if (!existCategory) {
        await this.categoriesRepository.create({
          name,
          description,
        });
      }
    });
  }
}

export { ImportCategoryUseCase };
