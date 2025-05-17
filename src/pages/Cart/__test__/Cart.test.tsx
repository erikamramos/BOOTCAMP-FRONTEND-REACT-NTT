import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import CartPage from '@/pages/Cart';
import { useCart } from '@/hooks/useCart';
import { AppRoutes } from '@/router/AppRoutes';
import { districtsMock } from '@/utils/__mocks__/district';
import { act } from 'react';
import { cartStateMock } from '@/utils/__mocks__/cart';
import { useAuth } from '@/hooks/useAuth';
import { authMock } from '@/utils/__mocks__/user';

jest.mock('@/hooks/useCart', () => ({
  useCart: jest.fn(),
}));

jest.mock('@/hooks/useAuth', () => ({
  useAuth: jest.fn(),
}));

jest.mock('@/hooks/useDistrict', () => jest.fn(() => districtsMock));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('CartPage component', () => {
  const mockUseCart = useCart as jest.Mock;
  const mockuseAuth = useAuth as jest.Mock;
  const mockNavigate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (require('react-router-dom').useNavigate as jest.Mock).mockReturnValue(mockNavigate);
  });

  it('should render CartList and FormShipping with mocked districts', async () => {
    mockUseCart.mockReturnValue({
      state: cartStateMock,
      dispatch: jest.fn(),
    });
    mockuseAuth.mockReturnValue(authMock);

    await act(async () => {
      render(
        <MemoryRouter initialEntries={[AppRoutes.CART]}>
          <Routes>
            <Route path={AppRoutes.CART} element={<CartPage />} />
          </Routes>
        </MemoryRouter>,
      );
    });

    districtsMock.forEach((district) => {
      expect(screen.getByText(district.name)).toBeInTheDocument();
    });

    expect(screen.getByText('Carrito de Compras')).toBeInTheDocument();
    expect(screen.getByText('Información de Envío')).toBeInTheDocument();
  });
});
