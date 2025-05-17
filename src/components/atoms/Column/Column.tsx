import { FC, PropsWithChildren } from 'react';
import styles from './Column.module.css';

interface ColumnProps {
  span?: number;
  className?: string;
}

export const Column: FC<PropsWithChildren<ColumnProps>> = ({
  children,
  span = 1,
  className = '',
}) => {
  return (
    <div className={`${styles.col} ${className}`} style={{ gridColumn: `span ${span}` }}>
      {children}
    </div>
  );
};
