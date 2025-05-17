import { CategoriesResponse } from '../../models/Category';

export const mapCategories = (categories: CategoriesResponse): CategoriesResponse => {
  return categories.map(({ slug, name }) => ({
    slug,
    name,
  }));
};
