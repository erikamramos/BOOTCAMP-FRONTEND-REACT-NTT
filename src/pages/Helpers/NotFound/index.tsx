// test
import { FC } from 'react';
import MainLayout from '../../../components/layout/MainLayout/MainLayout';

const NotFoundPage: FC = () => {
  return (
    <MainLayout>
      <div className="helper-layout">
        <h1>404 - Página no encontrada</h1>
        <p>Lo sentimos, la página que buscas no existe.</p>
      </div>
    </MainLayout>
  );
};
export default NotFoundPage;
