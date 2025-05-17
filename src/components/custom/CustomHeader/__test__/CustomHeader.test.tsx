import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { useCart } from '@/hooks/useCart';
import { useAuth } from '@/hooks/useAuth';
import Header from '@/components/custom/CustomHeader/CustomHeader';
import { AppRoutes } from '@/router/AppRoutes';
import { cartInitialMock } from '@/utils/__mocks__/cart';
import { authMock } from '@/utils/__mocks__/user';

jest.mock('@/hooks/useCart', () => ({
  useCart: jest.fn(),
}));

jest.mock('@/hooks/useAuth', () => ({
  useAuth: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Header Component', () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useCart as jest.Mock).mockReturnValue(cartInitialMock);
    (useAuth as jest.Mock).mockReturnValue(authMock);

    (require('react-router-dom').useNavigate as jest.Mock).mockReturnValue(mockNavigate);
  });

  it('should render the logo with the correct attributes', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    const logo = screen.getByAltText('MyMarket Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', './src/assets/images/logo.png');
  });

  it('should display the correct cart count', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    const cartCount = screen.getByText(cartInitialMock.state.totalItems.toString());
    expect(cartCount).toBeInTheDocument();
  });

  it('should navigate to the cart page when the cart icon is clicked', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    const cartButton = screen.getByLabelText('CartButton');
    fireEvent.click(cartButton);

    expect(mockNavigate).toHaveBeenCalledWith(AppRoutes.CART);
  });

  it("should display the user's first name and logout button", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    const welcomeMessage = screen.getByText(`Welcome ${authMock.state.user.firstName}`);
    expect(welcomeMessage).toBeInTheDocument();

    const logoutButton = screen.getByText('Cerrar Sesion');
    expect(logoutButton).toBeInTheDocument();
  });

  it('should call logoutUser when the logout button is clicked', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    const logoutButton = screen.getByText('Cerrar Sesion');
    fireEvent.click(logoutButton);

    expect(authMock.logoutUser).toHaveBeenCalled();
  });
});
