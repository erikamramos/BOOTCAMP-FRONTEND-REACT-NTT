import { CategoriesResponse } from '../models/Category';

// por qué unknow?
export const mapCategories = (categories: unknown): CategoriesResponse => {
  // en caso sea error se debería controlar en la llamada del servicio validando si es status 200 o un status diferente
  if (!Array.isArray(categories)) {
    throw new Error('Invalid categories data');
  }

  // tal vez
  return categories.map(({ slug, name }) => ({
    slug,
    name,
  }));
};
