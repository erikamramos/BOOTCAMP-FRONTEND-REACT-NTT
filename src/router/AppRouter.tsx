// test
import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';
import HomePage from '../pages/Home';
import CartPage from '../pages/Cart';
import EmptyPage from '../pages/Helpers/Empty';
import NotFoundPage from '../pages/Helpers/NotFound';

const AppRouter: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={AppRoutes.HOME} element={<HomePage />} />
        <Route path={AppRoutes.CART} element={<CartPage />} />
        <Route path={AppRoutes.CART_EMPTY} element={<EmptyPage />} />
        <Route path={AppRoutes.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
