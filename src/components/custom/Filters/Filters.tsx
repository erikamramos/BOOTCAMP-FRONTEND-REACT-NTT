import { FC, useEffect } from 'react';
import styles from './Filters.module.css';
import { Select, Input } from '../../atoms';
import { fetchCategories } from '../../../services/api/categoryServices';
import { useProducts } from '../../../hooks/useProducts';
import { fetchProductsByCategories } from '../../../services/api/productServices';

const Filters: FC = () => {
  const { dispatch, state } = useProducts();

  const searchProducts = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value.toLowerCase();
    const filtered = state.products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchQuery) ||
        product.description.toLowerCase().includes(searchQuery)
    );
    dispatch({ type: 'FILTER_PRODUCTS', payload: filtered });
  };

  const filterByCategory = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    if (!category || category === 'all') {
      dispatch({ type: 'FILTER_PRODUCTS', payload: state.products });
      return;
    }

    try {
      const filtered = await fetchProductsByCategories(category.toLowerCase());
      dispatch({ type: 'FILTER_PRODUCTS', payload: filtered });
    } catch (error) {
      console.error(error);
    }
  };

  const loadCategories = async () => {
    try {
      const categories = await fetchCategories();
      dispatch({ type: 'LOAD_CATEGORIES', payload: categories });
    } catch (error) {
      console.error(error);
    }
  };
  const mapCategoryOptions = () => {
    return state.categories.map((category) => ({
      value: category.slug,
      label: category.name,
    }));
  };

  useEffect(() => {
    loadCategories();
  }, [dispatch]);

  return (
    <section className={styles.filters}>
      <Select
        id="category-filter"
        options={mapCategoryOptions()}
        placeholder="All Categories"
        onChange={filterByCategory}
      />
      <div className={styles.filters__spacer}></div>
      <Input
        id="search-box"
        placeholder="Search..."
        onChange={searchProducts}
      />
    </section>
  );
};

export default Filters;
