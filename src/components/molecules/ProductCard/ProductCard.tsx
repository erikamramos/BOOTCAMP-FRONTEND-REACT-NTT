import React from "react";
import styles from "./ProductCard.module.css";
import { Product } from "../../../models/Product";
import Button from "../../atoms/Button/Button";
import RatingStars from "../../atoms/RatingStars/RatingStars";
import { useCart } from "../../../hooks/useCart";

type ProductCardProps = {
  data: Product;
};
const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const { dispatch } = useCart();

  const handleAddToCart = (product: Product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div className={styles.card}>
      <img src={data.thumbnail} alt={data.title} className={styles.card__image} />
      <span className={styles.card__category}>{data.category}</span>
      <h3 className={styles.card__name} >{data.title}</h3>
      <p className={styles.card__price}>${data.price}</p>
      <RatingStars rating={data.rating}/>
      <Button block variant="secondary" icon="shopping-cart" onClick={() => handleAddToCart(data)}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;