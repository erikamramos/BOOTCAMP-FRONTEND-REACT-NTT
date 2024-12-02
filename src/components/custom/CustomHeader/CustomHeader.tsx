import { FC } from 'react';
import styles from './CustomHeader.module.css';
import { useCart } from '../../../hooks/useCart';
import { useAuth } from '../../../hooks/useAuth';
import { Icon } from '../../atoms';
import { NavBar } from '../../organisms';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../router/AppRoutes';
import { HeaderConfig } from '../../../config/constants/config';

const Header: FC = () => {
  const navigate = useNavigate();
  const cart = useCart();
  const auth = useAuth();

  const cartState = cart.state;
  const authState = auth.state;
  const logoutUser = auth.logoutUser;

  const handleRedirectCart = () => {
    navigate(AppRoutes.CART);
  };
  return (
    <NavBar>
      <div className={styles.header__logo}>
        <img src="./src/assets/images/logo.png" alt="MyMarket Logo" />
      </div>
      <div className={styles.header__spacer}></div>
      <div className={styles.header__user}>
        <p>Welcome {authState.user?.firstName}</p>
        <button className={styles.header__logout} onClick={logoutUser}>
          Cerrar Sesion
        </button>
      </div>
      <div aria-label="CartButton" onClick={handleRedirectCart} className={styles.header__cart}>
        <Icon
          name="shopping-cart"
          color={HeaderConfig.CART_ICON_COLOR}
          size={HeaderConfig.CART_ICON_SIZE}
        />
        <span id="cart-count" className={styles.header__cart_count}>
          {cartState.totalItems}
        </span>
      </div>
    </NavBar>
  );
};

export default Header;
