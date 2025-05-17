import { FC, PropsWithChildren } from 'react';
import styles from './Button.module.css';
import { Icon } from '../Icon/Icon';
import { ButtonConfig } from '../../../config/constants/config';

type ButtonProps = {
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  block?: boolean;
  disabled?: boolean;
  icon?: string | null;
  className?: string;
};

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  onClick,
  variant = 'primary',
  block = false,
  disabled = false,
  icon,
  className,
}) => {
  return (
    <button
      className={`
        ${className}
        ${styles.button} 
        ${variant === 'primary' ? styles['button--primary'] : styles['button--secondary']}
        ${block ? styles['button--block'] : styles['button--auto']}
        `}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
      {icon && (
        <Icon
          name={icon}
          color={variant === 'primary' ? ButtonConfig.PRIMARY_COLOR : ButtonConfig.SECONDARY_COLOR}
          size={ButtonConfig.DEFAULT_SIZE}
        />
      )}
    </button>
  );
};
