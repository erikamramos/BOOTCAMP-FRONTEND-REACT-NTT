import { FC, PropsWithChildren } from 'react';
import styles from './MainLayout.module.css';
import CustomHeader from '../../custom/CustomHeader/CustomHeader';
import CustomFooter from '../../custom/CustomFooter/CustomFooter';

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <CustomHeader />
      <main className={styles.container}>{children}</main>
      <CustomFooter />
    </>
  );
};

export default MainLayout;
