import { FC, createContext, useReducer, ReactNode, Dispatch } from 'react';
import { productReducer, initialProductState, ProductState } from '../reducers/productReducer';
import { ProductAction } from '../types';

interface ProductContextProps {
  state: ProductState;
  dispatch: Dispatch<ProductAction>;
}

export const ProductContext = createContext<ProductContextProps | undefined>(undefined);

export const ProductProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialProductState);

  return <ProductContext.Provider value={{ state, dispatch }}>{children}</ProductContext.Provider>;
};
