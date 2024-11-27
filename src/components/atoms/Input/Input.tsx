import { FC, InputHTMLAttributes } from 'react';
import styles from './Input.module.css';
import { Icon } from '../Icon/Icon';
import { InputConfig } from '../../../config/constants/config';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  icon?: string | null;
  className?: string;
}

export const Input: FC<InputProps> = ({ id, icon, className, ...props }) => {
  return (
    <div className={`${styles.input} ${className}`}>
      <input id={id} className={styles.input__field} {...props} />
      {icon && (
        <Icon
          name={icon}
          color={InputConfig.DEFAULT_ICON_COLOR}
          size={InputConfig.DEFAULT_ICON_SIZE}
        />
      )}
    </div>
  );
};
