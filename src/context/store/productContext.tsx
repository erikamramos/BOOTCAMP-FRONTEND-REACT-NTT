import React, { createContext, useReducer, ReactNode, Dispatch } from 'react';
import { ProductState, productState, productReducer } from '../reducer';
import { ProductAction } from '../actions';

interface ProductContextProps {
  state: ProductState;
  dispatch: Dispatch<ProductAction>;
}

export const ProductContext = createContext<ProductContextProps | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, productState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
