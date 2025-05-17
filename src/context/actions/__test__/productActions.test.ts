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
    it('should dispatch LOAD_PRODUCTS and SET_TOTAL_PRODUCTS with fetched data', async () => {
      const mockResponse = { products: productsMock, total: 50 };
      (fetchProducts as jest.Mock).mockResolvedValue(mockResponse);

      await loadProducts(mockDispatch, 10, 0);

      expect(fetchProducts).toHaveBeenCalledWith('?limit=10&skip=0');
      expect(mockDispatch).toHaveBeenCalledWith({
        type: 'LOAD_PRODUCTS',
        payload: mockResponse.products,
      });
      expect(mockDispatch).toHaveBeenCalledWith({
        type: 'SET_TOTAL_PRODUCTS',
        payload: mockResponse.total,
      });
    });

    it('should handle errors gracefully', async () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      (fetchProducts as jest.Mock).mockRejectedValue(new Error('Fetch Error'));

      await loadProducts(mockDispatch, 10, 0);

      expect(fetchProducts).toHaveBeenCalledWith('?limit=10&skip=0');
      expect(consoleSpy).toHaveBeenCalledWith('Error loading products:', expect.any(Error));
      consoleSpy.mockRestore();
    });
  });

  describe('filterProductsByCategory', () => {
    it('should dispatch FILTER_PRODUCTS with all products for empty category', async () => {
      await filterProductsByCategory(mockDispatch, '', productsMock);

      expect(mockDispatch).toHaveBeenCalledWith({
        type: 'FILTER_PRODUCTS',
        payload: productsMock,
      });
    });

    it('should fetch and dispatch filtered products with SET_TOTAL_PRODUCTS', async () => {
      const mockResponse = { products: productsMock, total: 20 };
      (fetchProductsByCategories as jest.Mock).mockResolvedValue(mockResponse);

      await filterProductsByCategory(mockDispatch, 'electronics', [], 10, 0);

      expect(fetchProductsByCategories).toHaveBeenCalledWith('electronics', '?limit=10&skip=0');
      expect(mockDispatch).toHaveBeenCalledWith({
        type: 'FILTER_PRODUCTS',
        payload: mockResponse.products,
      });
      expect(mockDispatch).toHaveBeenCalledWith({
        type: 'SET_TOTAL_PRODUCTS',
        payload: mockResponse.total,
      });
    });

    it('should handle errors gracefully', async () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      (fetchProductsByCategories as jest.Mock).mockRejectedValue(new Error('Fetch Error'));

      await filterProductsByCategory(mockDispatch, 'electronics', [], 10, 0);

      expect(fetchProductsByCategories).toHaveBeenCalledWith('electronics', '?limit=10&skip=0');
      expect(consoleSpy).toHaveBeenCalledWith(
        'Error filtering products by category:',
        expect.any(Error),
      );
      consoleSpy.mockRestore();
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
