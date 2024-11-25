import { FC, ReactNode } from 'react';
import styles from './Column.module.css';

interface ColumnProps {
  children: ReactNode;
  span?: number;
  className?: string;
}

export const Column: FC<ColumnProps> = ({ children, span = 1, className = '' }) => {
  return (
    <div className={`${styles.col} ${className}`} style={{ gridColumn: `span ${span}` }}>
      {children}
    </div>
  );
};
