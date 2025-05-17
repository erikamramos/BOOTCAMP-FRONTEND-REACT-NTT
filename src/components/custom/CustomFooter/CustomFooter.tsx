import { FC } from 'react';
import styles from './CustomFooter.module.css';
import { Footer } from '../../organisms';

const CustomFooter: FC = () => {
  return (
    <Footer>
      <p>Síguenos en nuestras redes sociales</p>
      <div className={styles.footer__icons}>
        <img src="./src/assets/icons/twitter.svg" alt="Twitter" />
        <img src="./src/assets/icons/instagram.svg" alt="Instagram" />
        <img src="./src/assets/icons/tiktok.svg" alt="TikTok" />
      </div>
      <p>&copy; 2024 My Market. Todos los derechos reservados.</p>
    </Footer>
  );
};

export default CustomFooter;
