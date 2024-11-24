import { FC } from 'react';
import styles from './CustomHeader.module.css';
import { useCart } from '../../../hooks/useCart';
import { NavBar } from '../../organisms';

const Header: FC = () => {
  const { state } = useCart();
  return (
    <NavBar>
      <div className={styles.header__logo}>
        <img src="./src/assets/images/logo.png" alt="MyMarket Logo" />
      </div>
      <div className={styles.filters__spacer}></div>
      <div className={styles.header__cart}>
        <i
          className={`icon ${styles['header__cart-icon']}`}
          data-icon="shopping-cart"
        ></i>
        <span id="cart-count" className={styles.header__cart_count}>
          {state.totalItems}
        </span>
      </div>
      <div className={styles.header__cart}>
        <i
          className={`icon ${styles['header__cart-icon']}`}
          data-icon="user-line"
        ></i>
      </div>
    </NavBar>
  );
};

export default Header;
