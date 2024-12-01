import { render, screen, fireEvent } from '@testing-library/react';
import { useCart } from '@/hooks/useCart';
import ProductCard from '@/components/custom/ProductCard/ProductCard';
import { Product } from '@/models/Product';
import { CartConfig } from '@/config/constants/config';
import { mapCart } from '@/services/mappers/cartMapper';
import { productMock } from '@/utils/__mocks__/products';

jest.mock('@/hooks/useCart', () => ({
  useCart: jest.fn(),
}));

jest.mock('@/services/mappers/cartMapper', () => ({
  mapCart: jest.fn(),
}));

describe('ProductCard Component', () => {
  const mockDispatch = jest.fn();
  const mockProduct: Product = productMock;

  beforeEach(() => {
    jest.clearAllMocks();
    (useCart as jest.Mock).mockReturnValue({ dispatch: mockDispatch });
  });

  const renderComponent = () => render(<ProductCard data={mockProduct} />);

  it('should render product details correctly', () => {
    renderComponent();
    expect(screen.getByAltText('Laptop')).toBeInTheDocument();
    expect(screen.getByText('electronics')).toBeInTheDocument();
    expect(screen.getByText('Laptop')).toBeInTheDocument();
    expect(screen.getByText('$1200')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Añadir al carrito/i })).toBeInTheDocument();
  });

  it('should call mapCart and dispatch when "Add to Cart" is clicked', () => {
    (mapCart as jest.Mock).mockReturnValue({
      id: mockProduct.id,
      title: mockProduct.title,
      price: mockProduct.price,
      quantity: CartConfig.DEFAULT_QUANTITY,
    });

    renderComponent();
    const addButton = screen.getByRole('button', { name: /Añadir al carrito/i });
    fireEvent.click(addButton);

    expect(mapCart).toHaveBeenCalledWith(mockProduct, CartConfig.DEFAULT_QUANTITY);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'ADD_TO_CART',
      payload: {
        id: mockProduct.id,
        title: mockProduct.title,
        price: mockProduct.price,
        quantity: CartConfig.DEFAULT_QUANTITY,
      },
    });
  });
});
