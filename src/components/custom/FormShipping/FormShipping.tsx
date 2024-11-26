// permite registrar si pongo nombres apellidos, direccion y referencia vacios
import { FC, useState } from 'react';
import SuccessModal from '../../custom/SuccessModal/SuccessModal';
import { Card, FormField } from '../../molecules';
import { Button, Input, Select } from '../../atoms';
import useDistricts from '../../../hooks/useDistrict';
import { validateEmail, validatePhone, validateText } from '../../../utils/validations';
import { clearCart } from '../../../context/actions/cartActions';
import { useCart } from '../../../hooks/useCart';

const FormShipping: FC = () => {
  const { dispatch } = useCart();

  // se debe tipar para que solo acepte propiedades conocidas
  const [formValues, setFormValues] = useState({
    name: '',
    lastname: '',
    email: '',
    district: '',
    address: '',
    reference: '',
    phone: '',
  });

  // se debe tipar para que solo acepte propiedades conocidas
  const [errors, setErrors] = useState({
    name: '',
    lastname: '',
    email: '',
    district: '',
    address: '',
    reference: '',
    phone: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const districts = useDistricts();

  const handleChange = (field: string, value: string) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const validateForm = () => {
    const newErrors = {
      name: validateText(formValues.name) || '',
      lastname: validateText(formValues.lastname) || '',
      email: validateEmail(formValues.email) || '',
      district: validateText(formValues.district) || '',
      address: validateText(formValues.address) || '',
      reference: validateText(formValues.reference) || '',
      phone: validatePhone(formValues.phone) || '',
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === '');
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Formulario de envío:', formValues);
      setIsModalOpen(true);
    } else {
      console.log('El formulario tiene errores:', errors);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    clearCart(dispatch);
  };

  const mapDistrictOptions = () => {
    return districts.map((district) => ({
      value: district.name,
      label: district.name,
    }));
  };

  return (
    <>
      <Card>
        <h3>Información de Envío</h3>
        <form className="w-full" onSubmit={(e) => e.preventDefault()}>
          <FormField id="name" label="Nombre" error={errors.name}>
            <Input
              id="name"
              className="w-full"
              value={formValues.name}
              placeholder="Ingresa tus nombres"
              onChange={(e) => handleChange('name', e.target.value)}
            />
          </FormField>
          <FormField id="lastname" label="Apellidos" error={errors.lastname}>
            <Input
              id="lastname"
              className="w-full"
              value={formValues.lastname}
              placeholder="Ingresa tus apellidos"
              onChange={(e) => handleChange('lastname', e.target.value)}
            />
          </FormField>
          <FormField id="district" label="Distrito" error={errors.district}>
            <Select
              id="district"
              className="w-full"
              placeholder="Selecciona tu distrito"
              value={formValues.district}
              options={mapDistrictOptions()}
              onChange={(e) => handleChange('district', e.target.value)}
            />
          </FormField>
          <FormField id="address" label="Dirección" error={errors.address}>
            <Input
              id="address"
              className="w-full"
              value={formValues.address}
              placeholder="Ingresa tu dirección"
              onChange={(e) => handleChange('address', e.target.value)}
            />
          </FormField>
          <FormField id="reference" label="Referencia" error={errors.reference}>
            <Input
              id="reference"
              className="w-full"
              value={formValues.reference}
              placeholder="Referencia de tu dirección"
              onChange={(e) => handleChange('reference', e.target.value)}
            />
          </FormField>
          <FormField id="email" label="Correo Electrónico" error={errors.email}>
            <Input
              id="email"
              className="w-full"
              value={formValues.email}
              placeholder="Ingresa tus correo electrónico"
              onChange={(e) => handleChange('email', e.target.value)}
            />
          </FormField>
          <FormField id="phone" label="Celular" error={errors.phone}>
            <Input
              id="phone"
              className="w-full"
              value={formValues.phone}
              placeholder="Ingresa tu número de celular"
              onChange={(e) => handleChange('phone', e.target.value)}
            />
          </FormField>

          <Button block onClick={handleSubmit}>
            Enviar
          </Button>
        </form>
      </Card>

      <SuccessModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        message="Su pedido se ha registrado con éxito. Gracias por su compra."
      />
    </>
  );
};

export default FormShipping;
