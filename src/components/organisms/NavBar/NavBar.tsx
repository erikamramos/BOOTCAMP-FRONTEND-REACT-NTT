import { FC, ReactNode } from "react";
import styles from "./NavBar.module.css";

type NavBarProps = {
  children: ReactNode;
};

export const NavBar: FC<NavBarProps> = ({ children }) => {
  return (
    <header className={styles.navbar}>
      <div className={styles.navbar__container}>
        {children}
      </div>
    </header>
  );
};
