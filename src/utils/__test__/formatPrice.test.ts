import { formatPrice } from '@/utils/formatPrice';

describe('formatPrice', () => {
  it('should format a number to two decimal places', () => {
    expect(formatPrice(1234)).toBe('1234.00');
    expect(formatPrice(1234.5)).toBe('1234.50');
    expect(formatPrice(1234.567)).toBe('1234.57');
  });

  it('should handle zero correctly', () => {
    expect(formatPrice(0)).toBe('0.00');
  });

  it('should handle negative numbers correctly', () => {
    expect(formatPrice(-1234)).toBe('-1234.00');
    expect(formatPrice(-1234.5)).toBe('-1234.50');
    expect(formatPrice(-1234.567)).toBe('-1234.57');
  });

  it('should handle small numbers correctly', () => {
    expect(formatPrice(0.1)).toBe('0.10');
    expect(formatPrice(0.123)).toBe('0.12');
  });
});
