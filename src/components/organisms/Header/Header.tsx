import React from "react";
import styles from "./Header.module.css";
import { useCart } from "../../../hooks/useCart";

const Header: React.FC = () => {
  const { state } = useCart();
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <img src="./src/assets/images/logo.png" alt="MyMarket Logo"/>
        </div>
        <div className={styles.filters__spacer}></div>
        <div className={styles.header__cart}>
          <i className={`icon ${styles['header__cart-icon']}`} data-icon="shopping-cart"></i>
          <span id="cart-count" className={styles.header__cart_count}>{state.totalItems}</span>
        </div>
        <div className={styles.header__cart}>
          <i className={`icon ${styles['header__cart-icon']}`} data-icon="user-line"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;