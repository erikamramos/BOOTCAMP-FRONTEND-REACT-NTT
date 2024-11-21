import { Product } from '../models/Product';

// esto no es un componente
export const searchProducts = (products: Product[], query: string): Product[] => {
  return products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase())
  );
};
