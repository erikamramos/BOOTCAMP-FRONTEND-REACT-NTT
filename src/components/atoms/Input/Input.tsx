import { FC, InputHTMLAttributes } from 'react';
import styles from './Input.module.css';
import { Icon } from '../Icon/Icon';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  icon?: string | null;
}

export const Input: FC<InputProps> = ({ id, icon, ...props }) => {
  return (
    <div className={styles.input}>
      <input id={id} className={styles.input__field} {...props} />
      {icon && <Icon name={icon} color={'#245558'} size={20} />}
    </div>
  );
};
