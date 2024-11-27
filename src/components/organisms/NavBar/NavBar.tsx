import { FC, PropsWithChildren } from 'react';
import styles from './NavBar.module.css';

export const NavBar: FC<PropsWithChildren> = ({ children }) => {
  return (
    <header className={styles.navbar}>
      <div className={styles.navbar__container}>{children}</div>
    </header>
  );
};
