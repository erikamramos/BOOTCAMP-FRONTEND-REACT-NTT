import { useContext } from 'react';
import { ProductContext } from '../context/store/productContext';

export const useProducts = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error('error ProductProvider');
  }

  return context;
};
