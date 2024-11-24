import { FC } from 'react';
import { ProductProvider } from '../../context/store/productContext';
import { CartProvider } from '../../context/store/cartContext';
import MainLayout from '../../components/layout/MainLayout/MainLayout';

const CartPage: FC = () => {
  return (
    <>
      <ProductProvider>
        <CartProvider>
          <MainLayout>
            <div>Hello</div>
          </MainLayout>
        </CartProvider>
      </ProductProvider>
    </>
  );
};

export default CartPage;
