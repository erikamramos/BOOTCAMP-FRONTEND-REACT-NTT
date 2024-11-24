import { FC, useEffect } from "react";
import styles from "./ProductList.module.css";
import ProductCard from "../ProductCard/ProductCard";
import { useProducts } from "../../../hooks/useProducts";
import { fetchProducts } from "../../../services/api/productServices";

const ProductList: FC = () => {

  const { dispatch, state } = useProducts();

  useEffect(() => {
    const loadData = async () => {
      const products = await fetchProducts();
      dispatch({ type: 'LOAD_PRODUCTS', payload: products });;
    };

    loadData();
  }, [dispatch]);

  return (
    <main className={styles.product__container}>
      <div className={styles.product__list}>
        {state.filteredProducts.map((item, index) => (
          <div key={index}>
            <ProductCard data={item} >
            </ProductCard>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProductList;
