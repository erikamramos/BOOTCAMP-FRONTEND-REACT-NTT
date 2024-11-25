import { FC } from 'react';
import styles from './CustomHeader.module.css';
import { useCart } from '../../../hooks/useCart';
import { NavBar } from '../../organisms';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../atoms';

const Header: FC = () => {
  const navigate = useNavigate();
  const { state } = useCart();

  const handleRedirect = () => {
    navigate('/cart');
  };
  return (
    <NavBar>
      <div className={styles.header__logo}>
        <img src="./src/assets/images/logo.png" alt="MyMarket Logo" />
      </div>
      <div className={styles.header__spacer}></div>
      <div onClick={handleRedirect} className={styles.header__cart}>
        <Icon name="shopping-cart" color={'#245558'} size={25} />
        <span id="cart-count" className={styles.header__cart_count}>
          {state.totalItems}
        </span>
      </div>
      <div className={styles.header__cart}>
        <Icon name="user" color={'#245558'} size={25} />
      </div>
    </NavBar>
  );
};

export default Header;
