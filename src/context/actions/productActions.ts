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

export const loadProducts = async (dispatch: Dispatch<ProductAction>) => {
  try {
    const products: Product[] = await fetchProducts();
    dispatch({ type: 'LOAD_PRODUCTS', payload: products });
  } catch (error) {
    console.error('Error loading categories:', error);
  }
};

export const filterProductsByCategory = async (
  dispatch: Dispatch<ProductAction>,
  category: string,
  products: Product[],
) => {
  if (!category || category === 'all') {
    dispatch({ type: 'FILTER_PRODUCTS', payload: products });
    return;
  }

  try {
    const filteredProducts = await fetchProductsByCategories(category);
    dispatch({ type: 'FILTER_PRODUCTS', payload: filteredProducts });
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
