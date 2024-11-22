import React from "react";
import styles from "./Input.module.css";

type InputProps = {
  id?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({
  id,
  type = "text",
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className={styles.input}>
      <input
        id={id} 
        className={styles.input__field}
        placeholder={placeholder}
        onChange={onChange}
        type={type} 
        value={value}
        />
      <i className="icon input__icon" data-icon="search-line"></i>
    </div>

  );
};

export default Input;
