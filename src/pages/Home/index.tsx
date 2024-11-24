import { FC } from 'react';
import { ProductProvider } from '../../context/store/productContext';
import { CartProvider } from '../../context/store/cartContext';
import MainLayout from '../../components/layout/MainLayout/MainLayout';
import Filters from '../../components/custom/Filters/Filters';
import ProductList from '../../components/custom/ProductList/ProductList';

const HomePage: FC = () => {
  return (
    <>
      <ProductProvider>
        <CartProvider>
          <MainLayout>
            <Filters />
            <ProductList />
          </MainLayout>
        </CartProvider>
      </ProductProvider>
    </>
  );
};

export default HomePage;
