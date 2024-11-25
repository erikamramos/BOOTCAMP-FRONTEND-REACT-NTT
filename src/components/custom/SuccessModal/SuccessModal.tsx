import { FC } from 'react';
import { Button } from '../../atoms';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

const SuccessModal: FC<SuccessModalProps> = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="success-modal">
      <div className="success-modal__content">
        <h2 className="success-modal__title">¡Éxito!</h2>
        <p className="success-modal__message">{message}</p>
        <Button onClick={onClose} className="success-modal__button">
          Aceptar
        </Button>
      </div>
    </div>
  );
};

export default SuccessModal;
