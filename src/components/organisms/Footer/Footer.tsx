import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>Síguenos en nuestras redes sociales</p>
      <div className={styles.footer__icons}>
        <img src="./src/assets/images/redes/twitter.svg" alt="Twitter" />
        <img src="./src/assets/images/redes/instagram.svg" alt="Instagram" />
        <img src="./src/assets/images/redes/tiktok.svg" alt="TikTok" />
      </div>
      <p>&copy; 2024 My Market. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;