import { FC, useEffect } from 'react';
import styles from './ProductList.module.css';
import ProductCard from '../ProductCard/ProductCard';
import { useProducts } from '../../../hooks/useProducts';
import { loadProducts } from '../../../context/actions/productActions';

const ProductList: FC = () => {
  const { state, dispatch } = useProducts();

  useEffect(() => {
    loadProducts(dispatch);
  }, [dispatch]);

  return (
    <div className={styles.product__list}>
      {state.filteredProducts.map((item, index) => (
        <div key={index}>
          <ProductCard data={item}></ProductCard>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
