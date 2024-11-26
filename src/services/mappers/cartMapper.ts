import { Cart } from '../../models/Cart';
import { Product } from '../../models/Product';

export const mapCart = (product: Product): Cart => {
  return {
    id: product.id,
    title: product.title,
    description: product.description,
    price: product.price,
    thumbnail: product.thumbnail,
    // 1 por defecto?
    quantity: 1,
    totalPrice: product.price,
  };
};
