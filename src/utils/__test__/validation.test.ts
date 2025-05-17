import { validateText, validateEmail, validateRequired, validatePhone } from '@/utils/validations';

describe('Validation Functions', () => {
  describe('validateText', () => {
    it('should return an error for empty value', () => {
      expect(validateText('')).toBe('Este campo es obligatorio');
    });

    it('should return an error for value with only spaces', () => {
      expect(validateText('   ')).toBe('Este campo es obligatorio');
    });

    it('should return an error for invalid text', () => {
      expect(validateText('123')).toBe('Debe ingresar un valor válido');
      expect(validateText('abc123')).toBe('Debe ingresar un valor válido');
    });

    it('should return null for valid text', () => {
      expect(validateText('Hola Mundo')).toBeNull();
      expect(validateText('Solo texto')).toBeNull();
    });
  });

  describe('validateEmail', () => {
    it('should return an error for empty value', () => {
      expect(validateEmail('')).toBe('Este campo es obligatorio');
    });

    it('should return an error for value with only spaces', () => {
      expect(validateEmail('   ')).toBe('Este campo es obligatorio');
    });

    it('should return an error for invalid email', () => {
      expect(validateEmail('example')).toBe('Debe ingresar un correo válido');
      expect(validateEmail('example@com')).toBe('Debe ingresar un correo válido');
    });

    it('should return null for valid email', () => {
      expect(validateEmail('test@example.com')).toBeNull();
      expect(validateEmail('user123@test.co')).toBeNull();
    });
  });

  describe('validateRequired', () => {
    it('should return an error for empty value', () => {
      expect(validateRequired('')).toBe('Este campo es obligatorio');
    });

    it('should return an error for value with only spaces', () => {
      expect(validateRequired('   ')).toBe('Este campo es obligatorio');
    });

    it('should return null for non-empty value', () => {
      expect(validateRequired('Texto')).toBeNull();
      expect(validateRequired('123')).toBeNull();
    });
  });

  describe('validatePhone', () => {
    it('should return an error for empty value', () => {
      expect(validatePhone('')).toBe('Este campo es obligatorio');
    });

    it('should return an error for value with only spaces', () => {
      expect(validatePhone('   ')).toBe('Este campo es obligatorio');
    });

    it('should return an error for invalid phone number', () => {
      expect(validatePhone('123')).toBe(
        'Debe ingresar un número de celular válido (solo 9 dígitos)',
      );
      expect(validatePhone('1234567890')).toBe(
        'Debe ingresar un número de celular válido (solo 9 dígitos)',
      );
      expect(validatePhone('phone123')).toBe(
        'Debe ingresar un número de celular válido (solo 9 dígitos)',
      );
    });

    it('should return null for valid phone number', () => {
      expect(validatePhone('987654321')).toBeNull();
      expect(validatePhone('123456789')).toBeNull();
    });
  });
});
