import { User } from '../../models/auth';
import { Cart } from '../../models/Cart';
import { Category } from '../../models/Category';
import { Product } from '../../models/Product';

export type CartAction =
  | { type: 'ADD_TO_CART'; payload: Cart }
  | { type: 'REMOVE_FROM_CART'; payload: number }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'CLEAR_CART' };

export type ProductAction =
  | { type: 'LOAD_PRODUCTS'; payload: Product[] }
  | { type: 'LOAD_CATEGORIES'; payload: Category[] }
  | { type: 'FILTER_PRODUCTS'; payload: Product[] }
  | { type: 'SORT_PRODUCTS'; payload: Product[] }
  | { type: 'SET_TOTAL_PRODUCTS'; payload: number };

export type AuthActions =
  | { type: 'LOGIN_SUCCESS'; payload: { user: User; token: string } }
  | { type: 'SET_USER'; payload: User }
  | { type: 'LOGOUT' };
