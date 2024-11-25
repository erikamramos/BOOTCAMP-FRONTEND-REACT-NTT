import { FC, ReactNode } from 'react';
import styles from './Grid.module.css';

interface GridProps {
  children: ReactNode;
  className?: string;
  gap?: number;
}

export const Grid: FC<GridProps> = ({ children, className = '', gap = 16 }) => {
  return (
    <div className={`${styles.grid} ${className}`} style={{ gap: `${gap}px` }}>
      {children}
    </div>
  );
};
