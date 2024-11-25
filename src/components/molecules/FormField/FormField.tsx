import { FC, ReactNode } from 'react';
import styles from './FormField.module.css';

type FormFieldProps = {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
};

export const FormField: FC<FormFieldProps> = ({ id, label, error, children }) => {
  return (
    <div id={id} className={styles['form-field']}>
      <label htmlFor={id} className={styles['form-field__label']}>
        {label}
      </label>
      <>{children}</>
      {error && <span className={styles['form-field__error']}>{error}</span>}
    </div>
  );
};
