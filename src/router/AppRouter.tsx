// faltan test
import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';
import HomePage from '../pages/Home';
import CartPage from '../pages/Cart';
import EmptyPage from '../pages/Helpers/Empty';
import NotFoundPage from '../pages/Helpers/NotFound';
import LoginPage from '../pages/Login';
import ProtectedRoute from '../guard/ProtectedRoute';

const AppRouter: FC = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta de Login (Pública) */}
        <Route path={AppRoutes.LOGIN} element={<LoginPage />} />

        {/* Rutas protegidas */}
        <Route
          path={AppRoutes.HOME}
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path={AppRoutes.CART}
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={AppRoutes.CART_EMPTY}
          element={
            <ProtectedRoute>
              <EmptyPage />
            </ProtectedRoute>
          }
        />

        {/* Ruta para páginas no encontradas */}
        <Route path={AppRoutes.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
