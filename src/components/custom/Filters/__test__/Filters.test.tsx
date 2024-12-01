import { render, screen, fireEvent } from '@testing-library/react';
import { useProducts } from '@/hooks/useProducts';
import Filters from '@/components/custom/Filters/Filters';
import {
  filterProductsByCategory,
  loadCategories,
  searchProducts,
} from '@/context/actions/productActions';
import { categoriesMock, productsMock } from '@/utils/__mocks__/products';

jest.mock('@/hooks/useProducts', () => ({
  useProducts: jest.fn(),
}));

jest.mock('@/context/actions/productActions', () => ({
  filterProductsByCategory: jest.fn(),
  loadCategories: jest.fn(),
  searchProducts: jest.fn(),
}));

describe('Filters Component', () => {
  const mockState = { products: productsMock, categories: categoriesMock };
  const mockDispatch = jest.fn();

  const renderComponent = () => {
    return {
      ...render(<Filters />),
      mockDispatch,
    };
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (useProducts as jest.Mock).mockReturnValue({
      state: mockState,
      dispatch: mockDispatch,
    });
  });

  it('should loadCategories on mount', () => {
    const { mockDispatch } = renderComponent();
    expect(loadCategories).toHaveBeenCalledWith(mockDispatch);
  });

  it('should filter products by category selected', () => {
    const { mockDispatch } = renderComponent();
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'electronics' } });
    expect(filterProductsByCategory).toHaveBeenCalledWith(
      mockDispatch,
      'electronics',
      mockState.products,
    );
  });

  it('should search products when input changes', () => {
    const { mockDispatch } = renderComponent();
    const input = screen.getByPlaceholderText('Search...');
    fireEvent.change(input, { target: { value: 'phone' } });
    expect(searchProducts).toHaveBeenCalledWith(mockDispatch, 'phone', mockState.products);
  });

  it('should render category options', () => {
    renderComponent();
    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
    expect(screen.getByText('All Categories')).toBeInTheDocument();
    expect(screen.getByText('Electronics')).toBeInTheDocument();
    expect(screen.getByText('Clothing')).toBeInTheDocument();
  });
});
