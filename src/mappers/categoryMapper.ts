import { CategoriesResponse } from '../models/Category';

export const mapCategories = (categories: unknown): CategoriesResponse => {
  if (!Array.isArray(categories)) {
    throw new Error('Invalid categories data');
  }
  return categories.map((category) => ({
    slug: category.slug,
    name: category.name,
  }));
};
