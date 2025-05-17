import { FC, useState } from 'react';
import { Modal } from '../../organisms';
import { FormField } from '../../molecules';
import { validateEmail } from '../../../utils/validations';
import { Button, Input } from '../../atoms';
import styles from './ForgotPassModal.module.css';

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ForgotPasswordModal: FC<ForgotPasswordModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | undefined>('');

  const handleSend = () => {
    const validationError = validateEmail(email);
    if (validationError) {
      setError(validationError);
    } else {
      alert(`Se envió la información al correo ingresado: ${email}`);
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Recuperar Contraseña">
      <div>
        <p>Ingresa tu correo Electrónico</p>
        <form onSubmit={(e) => e.preventDefault()}>
          <FormField id="name" label="" error={error}>
            <Input
              id="username"
              className="w-full"
              value={email}
              placeholder="Correo Electrónico"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormField>
        </form>
        <div className={`${styles['forgot-password-modal__buttons']}`}>
          <Button onClick={handleSend}>Enviar</Button>
          <Button variant="secondary" onClick={onClose}>
            Cancelar
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ForgotPasswordModal;
