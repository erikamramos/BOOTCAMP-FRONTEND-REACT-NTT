export const validateText = (value: string): string | null => {
  const regex = /^[a-zA-Z\s]+$/;
  if (!value) return 'Este campo es obligatorio';
  if (!regex.test(value)) return 'Debe ingresar un valor válido';
  return null;
};

export const validateEmail = (value: string): string | null => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!value) return 'Este campo es obligatorio';
  if (!regex.test(value)) return 'Debe ingresar un correo válido';
  return null;
};

export const validateRequired = (value: string): string | null => {
  if (!value) return 'Este campo es obligatorio';
  return null;
};

export const validatePhone = (value: string): string | null => {
  const regex = /^[0-9]{9}$/;
  if (!value) return 'Este campo es obligatorio';
  if (!regex.test(value)) return 'Debe ingresar un número de celular válido (solo 9 dígitos)';
  return null;
};
