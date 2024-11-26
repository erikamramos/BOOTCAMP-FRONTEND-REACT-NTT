import { FC, InputHTMLAttributes } from 'react';
import styles from './Input.module.css';
import { Icon } from '../Icon/Icon';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  icon?: string | null;
  className?: string;
}

export const Input: FC<InputProps> = ({ id, icon, className, ...props }) => {
  return (
    <div className={`${styles.input} ${className}`}>
      <input id={id} className={styles.input__field} {...props} />
      {/* // no textos en duro */}
      {icon && <Icon name={icon} color={'#245558'} size={20} />}
    </div>
  );
};
