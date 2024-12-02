import { FormField } from '../../components/molecules';
import { Button, Input } from '../../components/atoms';
import { useAuth } from '../../hooks/useAuth';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateText } from '../../utils/validations';
import ForgotPasswordModal from '../../components/custom/ForgotPassModal/ForgotPassModal';

const LoginPage: FC = () => {
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const validateForm = () => {
    const newErrors = {
      username: validateText(formData.username) || '',
      password: validateText(formData.password) || '',
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === '');
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        await loginUser(formData);
        navigate('/');
      } catch (err) {
        setError('Usuario y/o contraseña incorrectos');
      }
    } else {
      console.log('El formulario tiene errores:', errors);
    }
  };

  return (
    <div className="login-page">
      <div className="login-page__left">
        <img className="login-page__logo" src="./src/assets/images/logo-vertical.png" alt="logo" />
        <div className="login-page__overlay"></div>
        <img
          className="login-page__image"
          src="./src/assets/images/supermarket.jpg"
          alt="Background"
        />
      </div>
      <div className="login-page__right">
        <div className="login-page__container">
          <img
            className="login-page__logo-mobile"
            src="./src/assets/images/logo-vertical-color.png"
            alt="logo"
          />
          <h1 className="login-page__title">Iniciar Sesión</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <FormField id="name" label="Usuario" error={errors.username}>
              <Input
                id="username"
                className="w-full"
                value={formData.username}
                placeholder=""
                onChange={(e) => handleChange('username', e.target.value)}
              />
            </FormField>
            <FormField id="password" label="Contraseña" error={errors.password}>
              <Input
                id="password"
                type="password"
                className="w-full"
                value={formData.password}
                placeholder=""
                onChange={(e) => handleChange('password', e.target.value)}
              />
            </FormField>
            <button className="login-form__password" onClick={() => setIsForgotPasswordOpen(true)}>
              ¿Olvidaste tu contraseña?
            </button>
            {error && <p className="login-form__error">{error}</p>}
            <Button block onClick={handleSubmit}>
              Enviar
            </Button>
          </form>
        </div>
        <ForgotPasswordModal
          isOpen={isForgotPasswordOpen}
          onClose={() => setIsForgotPasswordOpen(false)}
        />
      </div>
    </div>
  );
};

export default LoginPage;
