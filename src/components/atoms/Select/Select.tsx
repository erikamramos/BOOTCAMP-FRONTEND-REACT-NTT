import { FC } from 'react';
import styles from './Select.module.css';

type SelectProps = {
  id?: string;
  placeholder?: string;
  options: { value: string; label: string }[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
};

export const Select: FC<SelectProps> = ({ id, options, placeholder, onChange, value }) => {
  return (
    <select id={id} className={styles.select} onChange={onChange} value={value}>
      <option>{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
