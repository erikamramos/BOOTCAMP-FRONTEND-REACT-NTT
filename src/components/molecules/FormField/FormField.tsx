import { FC, PropsWithChildren } from 'react';
import styles from './FormField.module.css';

type FormFieldProps = {
  id: string;
  label: string;
  error?: string;
};

export const FormField: FC<PropsWithChildren<FormFieldProps>> = ({
  id,
  label,
  error,
  children,
}) => {
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
