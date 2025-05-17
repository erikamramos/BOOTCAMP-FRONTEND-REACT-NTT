import { CategoriesResponse } from '@/models/Category';
import { mapCategories } from '@/services/mappers/categoryMapper';
import { categoriesMock } from '@/utils/__mocks__/products';

describe('mapCategories', () => {
  it('should map categories correctly', () => {
    const categories: CategoriesResponse = categoriesMock;

    const expectedMappedCategories: CategoriesResponse = categoriesMock;

    const result = mapCategories(categories);

    expect(result).toEqual(expectedMappedCategories);
  });

  it('should return an empty array if no categories are provided', () => {
    const result = mapCategories([]);
    expect(result).toEqual([]);
  });
});
