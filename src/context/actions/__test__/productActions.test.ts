import {
  loadCategories,
  loadProducts,
  filterProductsByCategory,
  searchProducts,
} from '@/context/actions/productActions';
import { fetchCategories } from '@/services/api/categoryServices';
import { fetchProducts, fetchProductsByCategories } from '@/services/api/productServices';
import { categoriesMock, productMock, productsMock } from '@/utils/__mocks__/products';

jest.mock('@/services/api/categoryServices', () => ({
  fetchCategories: jest.fn(),
}));

jest.mock('@/services/api/productServices', () => ({
  fetchProducts: jest.fn(),
  fetchProductsByCategories: jest.fn(),
}));

describe('Product Actions', () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('loadCategories', () => {
    it('should dispatch LOAD_CATEGORIES with fetched categories', async () => {
      const mockCategories = categoriesMock;
      (fetchCategories as jest.Mock).mockResolvedValue(mockCategories);

      await loadCategories(mockDispatch);

      expect(fetchCategories).toHaveBeenCalled();
      expect(mockDispatch).toHaveBeenCalledWith({
        type: 'LOAD_CATEGORIES',
        payload: mockCategories,
      });
    });

    it('should handle errors gracefully', async () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      (fetchCategories as jest.Mock).mockRejectedValue(new Error('Fetch Error'));

      await loadCategories(mockDispatch);

      expect(fetchCategories).toHaveBeenCalled();
      expect(consoleSpy).toHaveBeenCalledWith('Error loading categories:', expect.any(Error));
      consoleSpy.mockRestore();
    });
  });

  describe('loadProducts', () => {
    it('should dispatch LOAD_PRODUCTS with fetched products', async () => {
      const mockProducts = productsMock;
      (fetchProducts as jest.Mock).mockResolvedValue(mockProducts);

      await loadProducts(mockDispatch);

      expect(fetchProducts).toHaveBeenCalled();
      expect(mockDispatch).toHaveBeenCalledWith({
        type: 'LOAD_PRODUCTS',
        payload: mockProducts,
      });
    });

    it('should handle errors gracefully', async () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      (fetchProducts as jest.Mock).mockRejectedValue(new Error('Fetch Error'));

      await loadProducts(mockDispatch);

      expect(fetchProducts).toHaveBeenCalled();
      expect(consoleSpy).toHaveBeenCalledWith('Error loading products:', expect.any(Error));
      consoleSpy.mockRestore();
    });
  });

  describe('filterProductsByCategory', () => {
    it('should dispatch FILTER_PRODUCTS with all products for "all" category', async () => {
      const mockProducts = productsMock;

      await filterProductsByCategory(mockDispatch, 'all', mockProducts);

      expect(mockDispatch).toHaveBeenCalledWith({
        type: 'FILTER_PRODUCTS',
        payload: mockProducts,
      });
    });

    it('should fetch and dispatch filtered products for a specific category', async () => {
      const mockFilteredProducts = productsMock;
      (fetchProductsByCategories as jest.Mock).mockResolvedValue(mockFilteredProducts);

      await filterProductsByCategory(mockDispatch, 'electronics', []);

      expect(fetchProductsByCategories).toHaveBeenCalledWith('electronics');
      expect(mockDispatch).toHaveBeenCalledWith({
        type: 'FILTER_PRODUCTS',
        payload: mockFilteredProducts,
      });
    });
  });

  describe('searchProducts', () => {
    it('should dispatch FILTER_PRODUCTS with products matching the search query', () => {
      const mockProducts = productsMock;
      const query = 'lap';

      searchProducts(mockDispatch, query, mockProducts);

      expect(mockDispatch).toHaveBeenCalledWith({
        type: 'FILTER_PRODUCTS',
        payload: [productMock],
      });
    });
  });
});
