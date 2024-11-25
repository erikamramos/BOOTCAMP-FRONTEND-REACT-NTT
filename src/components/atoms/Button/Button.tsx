import { FC, ReactNode } from 'react';
import styles from './Button.module.css';
import { Icon } from '../Icon/Icon';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  block?: boolean;
  disabled?: boolean;
  icon?: string | null;
  className?: string;
};

export const Button: FC<ButtonProps> = ({
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
      {icon && <Icon name={icon} color={variant === 'primary' ? '#FFFFFF' : '#245558'} size={16} />}
    </button>
  );
};
