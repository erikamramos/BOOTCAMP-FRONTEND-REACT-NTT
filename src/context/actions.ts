import { Category } from "../models/Category";
import { Product } from "../models/Product";

export type CartAction =
  | { type: 'ADD_TO_CART'; payload: Product }
  | { type: 'REMOVE_FROM_CART'; payload: number };

export type ProductAction =
| { type: 'LOAD_PRODUCTS'; payload: Product[] }
| { type: 'LOAD_CATEGORIES'; payload: Category[] }
| { type: 'FILTER_PRODUCTS'; payload: Product[] }
| { type: 'SORT_PRODUCTS'; payload: Product[] };
