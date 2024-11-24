import { Product } from '../../models/Product';

export const mapProducts = (products: Product[]): Product[] => {
  if (!Array.isArray(products)) {
    throw new Error('Invalid products data');
  }

  return products.map((product) => ({
    id: product.id,
    title: product.title,
    description: product.description,
    price: product.price,
    discountPercentage: product.discountPercentage,
    rating: product.rating,
    stock: product.stock,
    brand: product.brand,
    category: product.category,
    thumbnail: product.thumbnail,
    images: product.images,
  }));
};
