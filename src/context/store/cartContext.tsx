// test
import { FC, createContext, useReducer, ReactNode, Dispatch } from 'react';
import { cartReducer, initialCartState, CartState } from '../reducers/cartReducer';
import { CartAction } from '../types';

interface CartContextProps {
  state: CartState;
  dispatch: Dispatch<CartAction>;
}

export const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};
