import { FC, ReactNode } from 'react';
import { Button } from '../../atoms';
import styles from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  hideCloseButton?: boolean;
}

export const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  hideCloseButton = true,
}) => {
  if (!isOpen) return null;

  return (
    <div className={`${styles.modal}`}>
      <div className={`${styles.modal__content}`}>
        <h2 className={`${styles.modal__title}`}>{title}</h2>
        <div className={`${styles.modal__body}`}>{children}</div>
        {!hideCloseButton && (
          <Button onClick={onClose} className={`${styles.modal__button}`}>
            Cerrar
          </Button>
        )}
      </div>
    </div>
  );
};
