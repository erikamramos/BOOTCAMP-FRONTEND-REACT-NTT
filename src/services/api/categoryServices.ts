import { CategoriesResponse } from '../../models/Category';
import { mapCategories } from '../mappers/categoryMapper';
import fetchInstance from './config/fetchInstance';
import { Paths } from './config/paths';

export const fetchCategories = async (): Promise<CategoriesResponse> => {
  const response = await fetchInstance<CategoriesResponse>(`${Paths.Categories}`);
  const data = response.data;
  return mapCategories(data);
};