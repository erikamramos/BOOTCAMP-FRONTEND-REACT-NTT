import { FC, useEffect } from 'react';
import MainLayout from '../../components/layout/MainLayout/MainLayout';
import { Grid, Column } from '../../components/atoms';
import CartList from '../../components/custom/CartList/CartList';
import FormShipping from '../../components/custom/FormShipping/FormShipping';
import { useCart } from '../../hooks/useCart';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../router/AppRoutes';

const CartPage: FC = () => {
  const navigate = useNavigate();
  const { state } = useCart();

  const handleRedirect = () => {
    navigate(AppRoutes.CART_EMPTY);
  };

  useEffect(() => {
    if (state.totalItems === 0) {
      handleRedirect();
    }
  }, []);

  return (
    <>
      <MainLayout>
        <Grid gap={24}>
          <Column span={7}>
            <CartList />
          </Column>
          <Column span={5}>
            <FormShipping />
          </Column>
        </Grid>
      </MainLayout>
    </>
  );
};

export default CartPage;
