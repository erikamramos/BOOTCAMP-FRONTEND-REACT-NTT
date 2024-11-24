import { Category } from '../models/Category';
import { Product } from '../models/Product';
import { CartAction, ProductAction } from './types';

export interface CartState {
  cart: Product[];
  totalItems: number;
}

export const initialState: CartState = {
  cart: [],
  totalItems: 0,
};

export interface ProductState {
  products: Product[];
  filteredProducts: Product[];
  categories: Category[];
}

export const productState: ProductState = {
  products: [],
  filteredProducts: [],
  categories: [],
};

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
        totalItems: state.totalItems + 1,
      };
    default:
      return state;
  }
}

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
