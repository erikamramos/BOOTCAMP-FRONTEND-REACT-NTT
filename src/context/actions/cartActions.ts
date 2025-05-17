import { Dispatch } from 'react';
import { CartAction } from '../types';
import { Cart } from '../../models/Cart';

export const addToCart = (dispatch: Dispatch<CartAction>, product: Cart) => {
  dispatch({ type: 'ADD_TO_CART', payload: product });
};

export const removeFromCart = (dispatch: Dispatch<CartAction>, productId: number) => {
  dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
};

export const updateCartQuantity = (
  dispatch: Dispatch<CartAction>,
  productId: number,
  quantity: number,
) => {
  if (quantity < 1) return;
  dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
};

export const clearCart = (dispatch: Dispatch<CartAction>) => {
  dispatch({ type: 'CLEAR_CART' });
};
