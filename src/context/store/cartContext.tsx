import React, { createContext, useReducer, Dispatch, ReactNode } from 'react';
import { cartReducer, initialState, CartState } from '../reducer';
import { CartAction } from '../actions';

export const CartContext = createContext<{
  state: CartState;
  dispatch: Dispatch<CartAction>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
