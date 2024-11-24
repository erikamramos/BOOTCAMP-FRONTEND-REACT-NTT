import { FC, InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
}

export const Input: FC<InputProps> = ({ id, ...props }) => {
  return (
    <div className={styles.input}>
      <input id={id} className={styles.input__field} {...props} />
      <i
        className={`icon ${styles['input__icon']}`}
        data-icon="search-line"
      ></i>
    </div>
  );
};
