import { ProductsResponse } from '../../models/Product';
import { mapProducts } from '../mappers/productMapper';
import fetchInstance from './config/fetchInstance';
import { Paths } from './config/paths';

export const fetchProducts = async (query: string = '') => {
  const response = await fetchInstance<ProductsResponse>(`${Paths.Products}/search${query}`);
  const data = await response.data;
  return { products: mapProducts(data.products), total: response.data.total };
};

export const fetchProductsByCategories = async (category: string, query: string = '') => {
  const response = await fetchInstance<ProductsResponse>(
    `${Paths.ProductsCategory}/${category}${query}`,
  );
  const data = response.data;
  return { products: mapProducts(data.products), total: response.data.total };
};
