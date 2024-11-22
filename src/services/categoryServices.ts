import { CategoriesResponse } from '../models/Category';
import { mapCategories } from '../mappers/categoryMapper';

export const fetchCategories = async (): Promise<CategoriesResponse> => {
  const response = await fetch('https://dummyjson.com/products/categories');
  if (!response.ok) {
    throw new Error('Invalid categories data');
  }
  const data: CategoriesResponse = await response.json();
  return mapCategories(data);
};