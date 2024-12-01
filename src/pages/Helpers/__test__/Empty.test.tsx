import { render, screen } from '@testing-library/react';
import EmptyPage from '@/pages/Helpers/Empty';
import { useCart } from '@/hooks/useCart';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { act } from 'react';
import { AppRoutes } from '@/router/AppRoutes';
import { cartStateMock } from '@/utils/__mocks__/cart';

jest.mock('@/hooks/useCart', () => ({
  useCart: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('EmptyPage component', () => {
  const mockUseCart = useCart as jest.Mock;
  const mockNavigate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (require('react-router-dom').useNavigate as jest.Mock).mockReturnValue(mockNavigate);
  });

  it('should render the empty cart message and image', async () => {
    mockUseCart.mockReturnValue({
      state: cartStateMock,
      dispatch: jest.fn(),
    });
    await act(async () => {
      render(
        <MemoryRouter initialEntries={[AppRoutes.CART_EMPTY]}>
          <Routes>
            <Route path={AppRoutes.CART_EMPTY} element={<EmptyPage />} />
          </Routes>
        </MemoryRouter>,
      );
    });

    expect(screen.getByText('Carrito Vacío')).toBeInTheDocument();

    expect(screen.getByText('No tienes artículos en tu carrito')).toBeInTheDocument();
  });
});
