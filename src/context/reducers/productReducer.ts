import { Category } from '../../models/Category';
import { Product } from '../../models/Product';
import { ProductAction } from '../types';

export interface ProductState {
  products: Product[];
  filteredProducts: Product[];
  categories: Category[];
}

export const initialProductState: ProductState = {
  products: [],
  filteredProducts: [],
  categories: [],
};

export const productReducer = (state: ProductState, action: ProductAction): ProductState => {
  switch (action.type) {
    case 'LOAD_PRODUCTS':
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
      };
    case 'LOAD_CATEGORIES':
      return { ...state, categories: action.payload };
    case 'FILTER_PRODUCTS':
      return { ...state, filteredProducts: action.payload };
    default:
      return state;
  }
};
