import { ChangeEvent, FC, useEffect } from 'react';
import styles from './Filters.module.css';
import { Select, Input } from '../../atoms';
import { useProducts } from '../../../hooks/useProducts';
import {
  filterProductsByCategory,
  loadCategories,
  searchProducts,
} from '../../../context/actions/productActions';

const Filters: FC = () => {
  const { state, dispatch } = useProducts();

  useEffect(() => {
    loadCategories(dispatch);
  }, [dispatch]);

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    filterProductsByCategory(dispatch, e.target.value, state.products);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    searchProducts(dispatch, e.target.value, state.products);
  };

  const mapCategoryOptions = () => {
    return state.categories.map((category) => ({
      value: category.slug,
      label: category.name,
    }));
  };

  useEffect(() => {
    loadCategories(dispatch);
  }, [dispatch]);

  return (
    <section className={styles.filters}>
      <Select
        id="category-filter"
        options={mapCategoryOptions()}
        placeholder="All Categories"
        onChange={handleCategoryChange}
      />
      <div className={styles.filters__spacer}></div>
      <Input id="search-box" placeholder="Search..." icon="search" onChange={handleSearchChange} />
    </section>
  );
};

export default Filters;
