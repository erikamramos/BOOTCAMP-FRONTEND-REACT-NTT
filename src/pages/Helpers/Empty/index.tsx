import { FC } from 'react';
import MainLayout from '../../../components/layout/MainLayout/MainLayout';
const EmptyPage: FC = () => {
  return (
    <MainLayout>
      <div className="helper-layout">
        <img src="../src/assets/images/empty-cart.png" width={300} alt="" /> <h1>Carrito Vacío</h1>
        <p>No tienes artículos en tu carrito</p>
      </div>
    </MainLayout>
  );
};
export default EmptyPage;
