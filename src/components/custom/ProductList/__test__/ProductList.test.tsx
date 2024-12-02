import { render, screen, fireEvent } from '@testing-library/react';
import { useProducts } from '@/hooks/useProducts';
import { loadProducts } from '@/context/actions/productActions';
import { usePagination } from '@/hooks/usePagination';
import ProductList from '@/components/custom/ProductList/ProductList';
import { productsMock } from '@/utils/__mocks__/products';

jest.mock('@/hooks/useProducts', () => ({
  useProducts: jest.fn(),
}));

jest.mock('@/context/actions/productActions', () => ({
  loadProducts: jest.fn(),
}));

jest.mock('@/hooks/usePagination', () => ({
  usePagination: jest.fn(() => ({
    currentPage: 1,
    skip: 0,
    setPage: jest.fn(),
    nextPage: jest.fn(),
    prevPage: jest.fn(),
  })),
}));

jest.mock('@/components/custom/ProductCard/ProductCard', () => {
  return function MockProductCard({ data }: { data: any }) {
    return <div data-testid="product-card">{data.title}</div>;
  };
});

describe('ProductList Component', () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useProducts as jest.Mock).mockReturnValue({
      state: {
        filteredProducts: productsMock,
        totalProducts: 40,
      },
      dispatch: mockDispatch,
    });
  });

  const renderComponent = () => render(<ProductList />);

  it('should call loadProducts on mount', () => {
    renderComponent();
    expect(loadProducts).toHaveBeenCalledWith(mockDispatch, 20, 0);
  });

  it('should render the correct number of ProductCard components', () => {
    renderComponent();
    const productCards = screen.getAllByTestId('product-card');
    expect(productCards).toHaveLength(productsMock.length);
  });

  it('should render product details in ProductCard components', () => {
    renderComponent();
    expect(screen.getByText('Laptop')).toBeInTheDocument();
    expect(screen.getByText('Book')).toBeInTheDocument();
  });

  it('should call handlePageChange when a pagination button is clicked', () => {
    const setPageMock = jest.fn();
    (usePagination as jest.Mock).mockReturnValue({
      currentPage: 1,
      skip: 0,
      setPage: setPageMock,
      nextPage: jest.fn(),
      prevPage: jest.fn(),
    });

    renderComponent();
    const nextPageButton = screen.getByTestId('pagination_2');
    fireEvent.click(nextPageButton);
    expect(setPageMock).toHaveBeenCalledWith(2);
  });
});
