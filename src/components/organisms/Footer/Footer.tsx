import { FC, ReactNode } from 'react';
import styles from './Footer.module.css';

type FooterProps = {
  children: ReactNode;
};

export const Footer: FC<FooterProps> = ({ children }) => {
  return <footer className={styles.footer}>{children}</footer>;
};
