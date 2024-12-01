import { render, screen } from '@testing-library/react';
import { useProducts } from '@/hooks/useProducts';
import { loadProducts } from '@/context/actions/productActions';
import ProductList from '@/components/custom/ProductList/ProductList';
import { productsMock } from '@/utils/__mocks__/products';

jest.mock('@/hooks/useProducts', () => ({
  useProducts: jest.fn(),
}));

jest.mock('@/context/actions/productActions', () => ({
  loadProducts: jest.fn(),
}));

jest.mock('@/components/custom/ProductCard/ProductCard', () => {
  return function MockProductCard({ data }: { data: any }) {
    return <div data-testid="product-card">{data.title}</div>;
  };
});

describe('ProductList Component', () => {
  const mockDispatch = jest.fn();
  const mockState = {
    filteredProducts: productsMock,
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (useProducts as jest.Mock).mockReturnValue({
      state: mockState,
      dispatch: mockDispatch,
    });
  });

  const renderComponent = () => render(<ProductList />);

  it('should call loadProducts on mount', () => {
    renderComponent();
    expect(loadProducts).toHaveBeenCalledWith(mockDispatch);
  });

  it('should render the correct number of ProductCard components', () => {
    renderComponent();
    const productCards = screen.getAllByTestId('product-card');
    expect(productCards).toHaveLength(mockState.filteredProducts.length);
  });

  it('should render product details in ProductCard components', () => {
    renderComponent();
    expect(screen.getByText('Laptop')).toBeInTheDocument();
    expect(screen.getByText('Book')).toBeInTheDocument();
  });
});
