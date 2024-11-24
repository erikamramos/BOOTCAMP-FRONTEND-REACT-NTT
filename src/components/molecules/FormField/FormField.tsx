import { FC, ReactNode } from "react";
import styles from "./FormField.module.css";

type FormFieldProps = {
  id?: string;
  label?: String 
  children: ReactNode;
};

export const FormField: FC<FormFieldProps> = ({
  id,
  label,
  children
}) => {
  return (
    <div id={id} className={styles.formfield}>
      <label>{label}</label>
      <>{{children}}</>
    </div>

  );
};
