import { Cart } from '../../models/Cart';
import { CartAction } from '../types';

export interface CartState {
  cart: Cart[];
  totalItems: number;
  totalPrice: number;
}

export const initialCartState: CartState = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};

const calculateTotalPrice = (cart: Cart[]): number => {
  return cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
};

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const productIdx = state.cart.findIndex((item) => item.id === action.payload.id);

      if (productIdx === -1 && state.cart.some((item) => item.id === action.payload.id)) {
        console.log('Duplicate action ignored');
        return state;
      }

      if (productIdx >= 0) {
        const updatedCart = [...state.cart];
        updatedCart[productIdx].quantity += 1;

        return {
          ...state,
          cart: updatedCart,
          totalItems: state.totalItems + 1,
          totalPrice: calculateTotalPrice(updatedCart),
        };
      }

      const updatedCart = [...state.cart, action.payload];
      return {
        ...state,
        cart: [...state.cart, action.payload],
        totalItems: state.totalItems + 1,
        totalPrice: calculateTotalPrice(updatedCart),
      };
    }

    case 'REMOVE_FROM_CART': {
      const updatedCart = state.cart.filter((item) => item.id !== action.payload);

      const totalItems = updatedCart.reduce((sum, item) => sum + item.quantity, 0);

      return {
        ...state,
        cart: updatedCart,
        totalItems,
        totalPrice: calculateTotalPrice(updatedCart),
      };
    }

    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      const updatedCart = state.cart.map((item) => (item.id === id ? { ...item, quantity } : item));

      const totalItems = updatedCart.reduce((sum, item) => sum + item.quantity, 0);

      return {
        ...state,
        cart: updatedCart,
        totalItems,
        totalPrice: calculateTotalPrice(updatedCart),
      };
    }

    case 'CLEAR_CART':
      return initialCartState;

    default:
      return state;
  }
}
