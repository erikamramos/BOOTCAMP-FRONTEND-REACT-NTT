import { Product } from '@/models/Product';
import { mapProducts } from '@/services/mappers/productMapper';
import { productsMock } from '@/utils/__mocks__/products';

describe('mapProducts', () => {
  it('should map a list of products correctly', () => {
    const products: Product[] = productsMock;

    const expectedMappedProducts: Product[] = productsMock;

    const result = mapProducts(products);

    expect(result).toEqual(expectedMappedProducts);
  });

  it('should return an empty array if no products are provided', () => {
    const result = mapProducts([]);
    expect(result).toEqual([]);
  });
});
