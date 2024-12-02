import { Dispatch } from 'react';
import { ProductAction } from '../types';
import { Category } from '../../models/Category';
import { Product } from '../../models/Product';
import { fetchCategories } from '../../services/api/categoryServices';
import { fetchProducts, fetchProductsByCategories } from '../../services/api/productServices';

export const loadCategories = async (dispatch: Dispatch<ProductAction>) => {
  try {
    const categories: Category[] = await fetchCategories();
    dispatch({ type: 'LOAD_CATEGORIES', payload: categories });
  } catch (error) {
    console.error('Error loading categories:', error);
  }
};

export const loadProducts = async (
  dispatch: Dispatch<ProductAction>,
  limit: number = 10,
  skip: number = 0,
) => {
  try {
    const response = await fetchProducts(`?limit=${limit}&skip=${skip}`);
    const { products, total }: { products: Product[]; total: number } = response;
    dispatch({ type: 'LOAD_PRODUCTS', payload: products });
    dispatch({ type: 'SET_TOTAL_PRODUCTS', payload: total });
  } catch (error) {
    console.error('Error loading products:', error);
  }
};

export const filterProductsByCategory = async (
  dispatch: Dispatch<ProductAction>,
  category: string,
  products: Product[],
  limit: number = 10,
  skip: number = 0,
) => {
  if (!category || category === '') {
    dispatch({ type: 'FILTER_PRODUCTS', payload: products });
    return;
  }

  try {
    const response = await fetchProductsByCategories(category, `?limit=${limit}&skip=${skip}`);
    const { products, total }: { products: Product[]; total: number } = response;
    dispatch({ type: 'FILTER_PRODUCTS', payload: products });
    dispatch({ type: 'SET_TOTAL_PRODUCTS', payload: total });
  } catch (error) {
    console.error('Error filtering products by category:', error);
  }
};

export const searchProducts = (
  dispatch: Dispatch<ProductAction>,
  query: string,
  products: Product[],
) => {
  const searchQuery = query.toLowerCase();
  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery) ||
      product.description.toLowerCase().includes(searchQuery),
  );
  dispatch({ type: 'FILTER_PRODUCTS', payload: filteredProducts });
};
