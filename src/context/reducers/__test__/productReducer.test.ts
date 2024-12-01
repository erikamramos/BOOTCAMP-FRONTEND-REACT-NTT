import {
  productReducer,
  initialProductState,
  ProductState,
} from '@/context/reducers/productReducer';
import { ProductAction } from '@/context/types';
import { Product } from '@/models/Product';
import { Category } from '@/models/Category';
import { categoriesMock, productsMock } from '@/utils/__mocks__/products';

describe('productReducer', () => {
  const mockProducts: Product[] = productsMock;
  const mockCategories: Category[] = categoriesMock;

  it('should return the initial state when no action is provided', () => {
    const newState = productReducer(initialProductState, {} as ProductAction);
    expect(newState).toEqual(initialProductState);
  });

  it('should load products with LOAD_PRODUCTS action', () => {
    const action: ProductAction = { type: 'LOAD_PRODUCTS', payload: mockProducts };
    const newState = productReducer(initialProductState, action);

    expect(newState.products).toEqual(mockProducts);
    expect(newState.filteredProducts).toEqual(mockProducts);
  });

  it('should load categories with LOAD_CATEGORIES action', () => {
    const action: ProductAction = { type: 'LOAD_CATEGORIES', payload: mockCategories };
    const newState = productReducer(initialProductState, action);

    expect(newState.categories).toEqual(mockCategories);
  });

  it('should filter products with FILTER_PRODUCTS action', () => {
    const filteredProducts = [mockProducts[0]];
    const state: ProductState = {
      ...initialProductState,
      products: mockProducts,
      filteredProducts: mockProducts,
    };

    const action: ProductAction = { type: 'FILTER_PRODUCTS', payload: filteredProducts };
    const newState = productReducer(state, action);

    expect(newState.filteredProducts).toEqual(filteredProducts);
  });
});
