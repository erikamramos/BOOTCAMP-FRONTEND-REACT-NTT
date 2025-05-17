import { FC, useEffect } from 'react';
import styles from './ProductList.module.css';
import ProductCard from '../ProductCard/ProductCard';
import Pagination from '../../molecules/Pagination/Pagination';
import { useProducts } from '../../../hooks/useProducts';
import { usePagination } from '../../../hooks/usePagination';
import { loadProducts } from '../../../context/actions/productActions';
import { ProductListConfig } from '../../../config/constants/config';

const ProductList: FC = () => {
  const itemsPerPage = ProductListConfig.DEFAULT_ITEMS_PER_PAGE;
  const { state, dispatch } = useProducts();
  const { currentPage, skip, setPage } = usePagination({
    totalItems: state.totalProducts,
    itemsPerPage: itemsPerPage,
  });

  useEffect(() => {
    loadProducts(dispatch, itemsPerPage, skip);
  }, [dispatch, currentPage]);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  return (
    <>
      <div className={styles.product__list}>
        {state.filteredProducts.map((item, index) => (
          <div key={index}>
            <ProductCard data={item}></ProductCard>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalItems={state.totalProducts}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default ProductList;
