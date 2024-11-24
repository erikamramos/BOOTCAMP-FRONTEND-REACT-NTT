import { ProductsResponse, Product } from '../../models/Product';
import { mapProducts } from '../mappers/productMapper';
import fetchInstance from './config/fetchInstance';
import { Paths } from './config/paths';

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetchInstance<ProductsResponse>(`${Paths.Products}?limit=60`);
  const data = await response.data;
  return mapProducts(data.products);
};

export const fetchProductsByCategories = async (category: string): Promise<Product[]> => {
  const response = await fetchInstance<ProductsResponse>(
    `${Paths.ProductsCategory}/${category}?limit=10`,
  );
  const data = response.data;
  return mapProducts(data.products);
};
