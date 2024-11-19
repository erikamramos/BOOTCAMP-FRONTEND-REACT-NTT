import { CategoriesResponse } from '../models/Category';
import { mapCategories } from '../mappers/categoryMapper';

export const fetchCategories = async (): Promise<CategoriesResponse> => {
  const response = await fetch('https://dummyjson.com/products/categories');
  const data: unknown = await response.json();
  return mapCategories(data);
};