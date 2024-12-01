import { render, screen, fireEvent, RenderResult } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { useCart } from '@/hooks/useCart';
import Header from '@/components/custom/CustomHeader/CustomHeader';
import { AppRoutes } from '@/router/AppRoutes';

jest.mock('@/hooks/useCart', () => ({
  useCart: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

const renderComponent = async (): Promise<RenderResult> => {
  return render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
  );
};

describe('Header Component', () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useCart as jest.Mock).mockReturnValue({
      state: { totalItems: 3 },
    });
    (require('react-router-dom').useNavigate as jest.Mock).mockReturnValue(mockNavigate);
  });

  it('render the logo', async () => {
    renderComponent();
    const logo = screen.getByAltText('MyMarket Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', './src/assets/images/logo.png');
  });

  it('render the cart icon with the correct count', async () => {
    renderComponent();
    const cartButton = screen.getByLabelText('CartButton');
    expect(cartButton).toBeInTheDocument();
    const cartCount = screen.getByText('3');
    expect(cartCount).toBeInTheDocument();
  });

  it('should navigate to the cart page when the cart icon is clicked', async () => {
    renderComponent();
    const cartButton = screen.getByLabelText('CartButton');
    fireEvent.click(cartButton);
    expect(mockNavigate).toHaveBeenCalledWith(AppRoutes.CART);
  });

  it('render the user icon', async () => {
    renderComponent();
    const userButton = screen.getByLabelText('UserButton');
    expect(userButton).toBeInTheDocument();
  });
});
