import { FC,ReactNode } from 'react';
import styles from './MainLayout.module.css';
import CustomHeader from '../../custom/CustomHeader/CustomHeader';
import CustomFooter from '../../custom/CustomFooter/CustomFooter';

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <CustomHeader/>
      <main className={styles.main}>{children}</main>
      <CustomFooter/>
    </>
  );
};

export default MainLayout;
