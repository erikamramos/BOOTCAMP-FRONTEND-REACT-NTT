import { FC } from 'react';

// esto podr'ia ir como un componente
const NotFoundPage: FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que buscas no existe.</p>
    </div>
  );
};
export default NotFoundPage;
