import { FC } from 'react';
import MainLayout from '../../components/layout/MainLayout/MainLayout';
import { Grid, Column } from '../../components/atoms';
import CartList from '../../components/custom/CartList/CartList';
import FormShipping from '../../components/custom/FormShipping/FormShipping';
import { useCart } from '../../hooks/useCart';

const CartPage: FC = () => {
  const { state } = useCart();
  return (
    <>
      <MainLayout>
        {state.totalItems > 0 && (
          <Grid gap={24}>
            <Column span={7}>
              <CartList />
            </Column>
            <Column span={5}>
              <FormShipping />
            </Column>
          </Grid>
        )}
        {state.totalItems == 0 && (
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <img src="../src/assets/images/empty-cart.png" width={300} alt="" />
            <h1>Carrito Vacío</h1>
            <p>No tienes artículos en tu carrito</p>
          </div>
        )}
      </MainLayout>
    </>
  );
};

export default CartPage;
