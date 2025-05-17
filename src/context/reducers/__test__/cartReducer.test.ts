import { cartReducer, initialCartState, CartState } from '@/context/reducers/cartReducer';
import { CartAction } from '@/context/types';
import { Cart } from '@/models/Cart';
import { cartMock } from '@/utils/__mocks__/cart';

describe('cartReducer', () => {
  const mockProduct: Cart = cartMock[0];
  const mockProduct2: Cart = cartMock[1];

  it('should return the initial state when no action is provided', () => {
    const newState = cartReducer(initialCartState, {} as CartAction);
    expect(newState).toEqual(initialCartState);
  });

  it('should add a product to the cart with ADD_TO_CART action', () => {
    const action: CartAction = { type: 'ADD_TO_CART', payload: mockProduct };
    const newState = cartReducer(initialCartState, action);

    expect(newState.cart).toHaveLength(1);
    expect(newState.cart[0]).toEqual(mockProduct);
    expect(newState.totalItems).toBe(1);
    expect(newState.totalPrice).toBe(mockProduct.price);
  });

  it('should increase the quantity if product already exists in the cart', () => {
    const state: CartState = {
      ...initialCartState,
      cart: [mockProduct],
      totalItems: 1,
      totalPrice: 1200,
    };

    const action: CartAction = { type: 'ADD_TO_CART', payload: mockProduct };
    const newState = cartReducer(state, action);

    expect(newState.cart).toHaveLength(1);
    expect(newState.cart[0].quantity).toBe(2);
    expect(newState.totalItems).toBe(2);
    expect(newState.totalPrice).toBe(2400);
  });

  it('should remove a product from the cart with REMOVE_FROM_CART action', () => {
    const state: CartState = {
      ...initialCartState,
      cart: cartMock,
      totalItems: 2,
      totalPrice: 2000,
    };

    const action: CartAction = { type: 'REMOVE_FROM_CART', payload: 1 };
    const newState = cartReducer(state, action);

    expect(newState.cart).toHaveLength(1);
    expect(newState.cart[0]).toEqual(mockProduct2);
    expect(newState.totalItems).toBe(1);
    expect(newState.totalPrice).toBe(800);
  });

  it('should update the quantity of a product with UPDATE_QUANTITY action', () => {
    const state: CartState = {
      ...initialCartState,
      cart: [mockProduct],
      totalItems: 1,
      totalPrice: 1200,
    };

    const action: CartAction = { type: 'UPDATE_QUANTITY', payload: { id: 1, quantity: 3 } };
    const newState = cartReducer(state, action);

    expect(newState.cart[0].quantity).toBe(3);
    expect(newState.totalItems).toBe(3);
    expect(newState.totalPrice).toBe(3600);
  });

  it('should clear the cart with CLEAR_CART action', () => {
    const state: CartState = {
      ...initialCartState,
      cart: cartMock,
      totalItems: 2,
      totalPrice: 2000,
    };

    const action: CartAction = { type: 'CLEAR_CART' };
    const newState = cartReducer(state, action);

    expect(newState).toEqual(initialCartState);
  });
});
