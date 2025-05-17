import {
  addToCart,
  removeFromCart,
  updateCartQuantity,
  clearCart,
} from '@/context/actions/cartActions';
import { Cart } from '@/models/Cart';
import { productCartMock } from '@/utils/__mocks__/cart';

describe('Cart Actions', () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should dispatch ADD_TO_CART action with correct payload', () => {
    const product: Cart = productCartMock;

    addToCart(mockDispatch, product);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'ADD_TO_CART',
      payload: product,
    });
  });

  it('should dispatch REMOVE_FROM_CART action with correct payload', () => {
    const productId = 1;

    removeFromCart(mockDispatch, productId);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'REMOVE_FROM_CART',
      payload: productId,
    });
  });

  it('should dispatch UPDATE_QUANTITY action with correct payload', () => {
    const productId = 1;
    const quantity = 3;

    updateCartQuantity(mockDispatch, productId, quantity);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'UPDATE_QUANTITY',
      payload: { id: productId, quantity },
    });
  });

  it('should not dispatch UPDATE_QUANTITY if quantity is less than 1', () => {
    const productId = 1;
    const quantity = 0;

    updateCartQuantity(mockDispatch, productId, quantity);

    expect(mockDispatch).not.toHaveBeenCalled();
  });

  it('should dispatch CLEAR_CART action', () => {
    clearCart(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'CLEAR_CART',
    });
  });
});
