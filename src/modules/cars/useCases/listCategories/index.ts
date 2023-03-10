import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';

const categoriesRespository = CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRespository);
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);

export {
  listCategoriesController
}