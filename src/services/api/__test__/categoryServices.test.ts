import { fetchCategories } from '@/services/api/categoryServices';
import fetchInstance from '@/services/api/config/fetchInstance';
import { mapCategories } from '@/services/mappers/categoryMapper';
import { Paths } from '@/services/api/config/paths';
import { CategoriesResponse } from '@/models/Category';
import { categoriesMock } from '@/utils/__mocks__/products';

jest.mock('@/services/api/config/fetchInstance', () => jest.fn());
jest.mock('@/services/mappers/categoryMapper', () => ({
  mapCategories: jest.fn(),
}));

describe('categoryServices', () => {
  const mockCategoriesResponse: CategoriesResponse = categoriesMock;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call fetchInstance with the correct path', async () => {
    (fetchInstance as jest.Mock).mockResolvedValue({ data: mockCategoriesResponse });
    (mapCategories as jest.Mock).mockReturnValue(mockCategoriesResponse);

    await fetchCategories();

    expect(fetchInstance).toHaveBeenCalledWith(Paths.Categories);
  });

  it('should map the categories using mapCategories', async () => {
    (fetchInstance as jest.Mock).mockResolvedValue({ data: mockCategoriesResponse });
    (mapCategories as jest.Mock).mockReturnValue(mockCategoriesResponse);

    const result = await fetchCategories();

    expect(mapCategories).toHaveBeenCalledWith(mockCategoriesResponse);
    expect(result).toEqual(mockCategoriesResponse);
  });

  it('should throw an error if fetchInstance fails', async () => {
    (fetchInstance as jest.Mock).mockRejectedValue(new Error('Network Error'));

    await expect(fetchCategories()).rejects.toThrow('Network Error');
    expect(fetchInstance).toHaveBeenCalledWith(Paths.Categories);
  });
});
