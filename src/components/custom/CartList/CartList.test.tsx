import { render, screen, fireEvent } from '@testing-library/react';
import CartList from './CartList';
import { useCart } from '@/hooks/useCart';
import { updateCartQuantity, removeFromCart } from '@/context/actions/cartActions';
import { formatPrice } from '@/utils/formatPrice';
import { cartStateMock } from '@/services/__mocks__/cartState';

jest.mock('@/hooks/useCart');
jest.mock('@/context/actions/cartActions', () => ({
  updateCartQuantity: jest.fn(),
  removeFromCart: jest.fn(),
}));
jest.mock('@/utils/formatPrice', () => ({
  formatPrice: jest.fn(),
}));

describe('CartList Component', () => {
  const mockDispatch = jest.fn();
  const mockCartState = cartStateMock;

  beforeEach(() => {
    jest.clearAllMocks();
    (useCart as jest.Mock).mockReturnValue({ state: mockCartState, dispatch: mockDispatch });
    (formatPrice as jest.Mock).mockReturnValue('40.00');
  });

  it('renders component cartList', () => {
    render(<CartList />);

    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
  });

  it('displays the correct total price', () => {
    render(<CartList />);
    expect(screen.getByText(/Total a pagar/i)).toHaveTextContent('$40.00');
  });

  it('calls updateCartQuantity when incrementing or decrementing the quantity', () => {
    render(<CartList />);

    const incrementButton = screen.getAllByLabelText('Increment')[0];
    fireEvent.click(incrementButton);
    expect(updateCartQuantity).toHaveBeenCalledWith(mockDispatch, 1, 3);

    const decrementButton = screen.getAllByLabelText('Decrement')[0];
    fireEvent.click(decrementButton);
    expect(updateCartQuantity).toHaveBeenCalledWith(mockDispatch, 1, 1);
  });

  it('calls removeFromCart when clicking the remove button', () => {
    render(<CartList />);

    const removeButtons = screen.getAllByLabelText(/Eliminar/i);
    fireEvent.click(removeButtons[0]);
    expect(removeFromCart).toHaveBeenCalledWith(mockDispatch, 1);
  });
});
