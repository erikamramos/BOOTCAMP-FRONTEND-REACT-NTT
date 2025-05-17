/**
 * Expresión regular para validar texto que solo contenga letras y espacios.
 */
export const TEXT_REGEX = /^[a-zA-Z\s]+$/;

/**
 * Expresión regular para validar correos electrónicos.
 */
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Expresión regular para validar números de teléfono de 9 dígitos.
 */
export const PHONE_REGEX = /^[0-9]{9}$/;
