import { Cart } from '@/models/Cart';
import { Product } from '@/models/Product';
import { mapCart } from '@/services/mappers/cartMapper';
import { cartMock } from '@/utils/__mocks__/cart';
import { productMock } from '@/utils/__mocks__/products';

describe('mapCart', () => {
  it('should map a Product to a Cart with the specified quantity', () => {
    const product: Product = productMock;

    const quantity = 1;

    const expectedCart: Cart = cartMock[0];

    const result = mapCart(product, quantity);

    expect(result).toEqual(expectedCart);
  });

  it('should default the quantity to 1 if not provided', () => {
    const product: Product = productMock;

    const expectedCart: Cart = cartMock[0];

    const result = mapCart(product);

    expect(result).toEqual(expectedCart);
  });
});
