import { ProductsResponse, Product } from '../models/Product';
import { mapProducts } from '../mappers/productMapper';

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch('https://dummyjson.com/products?limit=60');
  const data: ProductsResponse = await response.json();
  return mapProducts(data.products);
};

export const fetchProductsByCategories = async (category: string): Promise<Product[]> => {
  const response = await fetch(`https://dummyjson.com/products/category/${category}?limit=10`);
  const data: ProductsResponse = await response.json();
  return mapProducts(data.products);
};
  
export const searchProducts = (products: Product[], query: string): Product[] => {
  return products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase())
  );
};
