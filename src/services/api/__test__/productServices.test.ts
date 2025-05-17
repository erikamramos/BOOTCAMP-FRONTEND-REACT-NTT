import { fetchProducts, fetchProductsByCategories } from '@/services/api/productServices';
import fetchInstance from '@/services/api/config/fetchInstance';
import { mapProducts } from '@/services/mappers/productMapper';
import { Paths } from '@/services/api/config/paths';
import { ProductsResponse } from '@/models/Product';
import { productsMock } from '@/utils/__mocks__/products';

jest.mock('@/services/api/config/fetchInstance', () => jest.fn());
jest.mock('@/services/mappers/productMapper', () => ({
  mapProducts: jest.fn(),
}));

describe('productServices', () => {
  const mockProductsResponse: ProductsResponse = {
    products: productsMock,
    total: 3,
    skip: 0,
    limit: 60,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call fetchInstance with the correct path for fetchProducts', async () => {
    (fetchInstance as jest.Mock).mockResolvedValue({ data: mockProductsResponse });
    (mapProducts as jest.Mock).mockReturnValue(mockProductsResponse.products);

    const query = '?limit=10&skip=0';
    const result = await fetchProducts(query);

    expect(fetchInstance).toHaveBeenCalledWith(`${Paths.Products}/search${query}`);
    expect(mapProducts).toHaveBeenCalledWith(mockProductsResponse.products);
    expect(result).toEqual({
      products: mockProductsResponse.products,
      total: mockProductsResponse.total,
    });
  });

  it('should handle errors in fetchProducts', async () => {
    const query = '?limit=10&skip=0';
    (fetchInstance as jest.Mock).mockRejectedValue(new Error('API Error'));

    await expect(fetchProducts(query)).rejects.toThrow('API Error');
    expect(fetchInstance).toHaveBeenCalledWith(`${Paths.Products}/search${query}`);
  });

  it('should call fetchInstance with the correct path for fetchProductsByCategories', async () => {
    (fetchInstance as jest.Mock).mockResolvedValue({ data: mockProductsResponse });
    (mapProducts as jest.Mock).mockReturnValue(mockProductsResponse.products);

    const category = 'electronics';
    const query = '?limit=10&skip=0';
    const result = await fetchProductsByCategories(category, query);

    expect(fetchInstance).toHaveBeenCalledWith(`${Paths.ProductsCategory}/${category}${query}`);
    expect(mapProducts).toHaveBeenCalledWith(mockProductsResponse.products);
    expect(result).toEqual({
      products: mockProductsResponse.products,
      total: mockProductsResponse.total,
    });
  });

  it('should handle errors in fetchProductsByCategories', async () => {
    const category = 'electronics';
    const query = '?limit=10&skip=0';
    (fetchInstance as jest.Mock).mockRejectedValue(new Error('Category Error'));

    await expect(fetchProductsByCategories(category, query)).rejects.toThrow('Category Error');
    expect(fetchInstance).toHaveBeenCalledWith(`${Paths.ProductsCategory}/${category}${query}`);
  });
});
