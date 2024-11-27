import { FC, PropsWithChildren } from 'react';
import styles from './Grid.module.css';

interface GridProps {
  className?: string;
  gap?: number;
}

export const Grid: FC<PropsWithChildren<GridProps>> = ({ children, className = '', gap = 16 }) => {
  return (
    <div className={`${styles.grid} ${className}`} style={{ gap: `${gap}px` }}>
      {children}
    </div>
  );
};
