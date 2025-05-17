import { FC, PropsWithChildren } from 'react';
import styles from './NavBar.module.css';

export const NavBar: FC<PropsWithChildren> = ({ children }) => {
  return (
    <header className={styles.navbar}>
      <nav className={styles.navbar__container}>{children}</nav>
    </header>
  );
};
