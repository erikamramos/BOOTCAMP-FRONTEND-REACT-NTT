import { ChangeEvent, FC } from 'react';
import styles from './Select.module.css';

type SelectProps = {
  id?: string;
  placeholder?: string;
  options: { value: string | number; label: string }[];
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  value?: string;
};

export const Select: FC<SelectProps> = ({
  id,
  options,
  placeholder,
  onChange,
  value,
  className,
}) => {
  return (
    <select id={id} className={`${styles.select} ${className}`} onChange={onChange} value={value}>
      <option>{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
