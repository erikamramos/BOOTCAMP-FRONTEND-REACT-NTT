import { FC } from 'react';
import MainLayout from '../../components/layout/MainLayout/MainLayout';
import Filters from '../../components/custom/Filters/Filters';
import ProductList from '../../components/custom/ProductList/ProductList';

const HomePage: FC = () => {
  return (
    <>
      <MainLayout>
        <Filters />
        <ProductList />
      </MainLayout>
    </>
  );
};

export default HomePage;
