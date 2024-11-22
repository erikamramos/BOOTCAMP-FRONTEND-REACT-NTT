import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  block?: boolean;
  disabled?: boolean;
  icon?: string | null
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  block = false,
  disabled = false,
  icon,
}) => {
  return (
    <button
      className={`
        ${styles.button} 
        ${ variant === "primary" ? styles.primary : styles.secondary }
        ${ block ? styles.block : styles.auto }
        `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      {icon && (
        <i className={`icon ${styles['product-card__button-icon']}`} data-icon={icon}></i>
      )}
    </button>
  );
};

export default Button;
