import { FC } from 'react';
import styles from './CustomHeader.module.css';
import { useCart } from '../../../hooks/useCart';
import { NavBar } from '../../organisms';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../atoms';
import { AppRoutes } from '../../../router/AppRoutes';
import { HeaderConfig } from '../../../config/constants/config';

const Header: FC = () => {
  const navigate = useNavigate();
  const { state } = useCart();

  const handleRedirectCart = () => {
    navigate(AppRoutes.CART);
  };
  return (
    <NavBar>
      <div className={styles.header__logo}>
        <img src="./src/assets/images/logo.png" alt="MyMarket Logo" />
      </div>
      <div className={styles.header__spacer}></div>
      <div aria-label="CartButton" onClick={handleRedirectCart} className={styles.header__cart}>
        <Icon name="shopping-cart" color={'#245558'} size={25} />
        <span id="cart-count" className={styles.header__cart_count}>
          {state.totalItems}
        </span>
      </div>
      <div aria-label="UserButton" className={styles.header__cart}>
        <Icon name="user" color={HeaderConfig.CART_ICON_COLOR} size={HeaderConfig.CART_ICON_SIZE} />
      </div>
    </NavBar>
  );
};

export default Header;
