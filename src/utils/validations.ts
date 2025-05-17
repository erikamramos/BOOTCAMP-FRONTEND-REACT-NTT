import { EMAIL_REGEX, PHONE_REGEX, TEXT_REGEX } from './regex';

/**
 * Funcion para validar texto que solo contenga letras y espacios.
 */
export const validateText = (value: string): string | null => {
  const regex = TEXT_REGEX;
  if (!value) return 'Este campo es obligatorio';
  if (!value.trim()) return 'Este campo es obligatorio';
  if (!regex.test(value)) return 'Debe ingresar un valor válido';
  return null;
};

/**
 * Funcion para validar correos electrónicos.
 */
export const validateEmail = (value: string): string | null => {
  const regex = EMAIL_REGEX;
  if (!value) return 'Este campo es obligatorio';
  if (!value.trim()) return 'Este campo es obligatorio';
  if (!regex.test(value)) return 'Debe ingresar un correo válido';
  return null;
};

/**
 * Funcion para validar que el valor es requerido.
 */
export const validateRequired = (value: string): string | null => {
  if (!value) return 'Este campo es obligatorio';
  if (!value.trim()) return 'Este campo es obligatorio';
  return null;
};

/**
 * Funcion para validar números de teléfono de 9 dígitos
 */
export const validatePhone = (value: string): string | null => {
  const regex = PHONE_REGEX;
  if (!value) return 'Este campo es obligatorio';
  if (!value.trim()) return 'Este campo es obligatorio';
  if (!regex.test(value)) return 'Debe ingresar un número de celular válido (solo 9 dígitos)';
  return null;
};
