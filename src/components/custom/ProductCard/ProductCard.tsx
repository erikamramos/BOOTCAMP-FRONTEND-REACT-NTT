import { FC } from 'react';
import styles from './ProductCard.module.css';
import { Product } from '../../../models/Product';
import { RatingStars, Button } from '../../atoms';
import { useCart } from '../../../hooks/useCart';
import { Card } from '../../molecules';

type ProductCardProps = {
  data: Product;
};
const ProductCard: FC<ProductCardProps> = ({ data }) => {
  const { dispatch } = useCart();

  const handleAddToCart = (product: Product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <Card>
      <img src={data.thumbnail} alt={data.title} className={styles.card__image} />
      <span className={styles.card__category}>{data.category}</span>
      <h3 className={styles.card__name}>{data.title}</h3>
      <p className={styles.card__price}>${data.price}</p>
      <RatingStars rating={data.rating} />
      <Button
        block
        className={styles.card__button}
        variant="secondary"
        icon="shopping-cart"
        onClick={() => handleAddToCart(data)}
      >
        Add to Cart
      </Button>
    </Card>
  );
};

export default ProductCard;
