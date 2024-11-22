import React from 'react';
import styles from './MainLayout.module.css';
import Header from '../../organisms/Header/Header';
import Footer from '../../organisms/Footer/Footer';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header/>
      <main className={styles.main}>{children}</main>
      <Footer/>
    </>
  );
};

export default MainLayout;
