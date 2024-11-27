import { Cart } from '../../models/Cart';
import { Product } from '../../models/Product';

export const mapCart = (product: Product, quantity: number = 1): Cart => {
  return {
    id: product.id,
    title: product.title,
    description: product.description,
    price: product.price,
    thumbnail: product.thumbnail,
    quantity,
    totalPrice: product.price * quantity,
  };
};
