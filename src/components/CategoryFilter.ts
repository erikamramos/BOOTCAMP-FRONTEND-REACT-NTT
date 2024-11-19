import { CategoriesResponse } from '../models/Category';

export const renderCategories = (categories: CategoriesResponse, dropdown: HTMLSelectElement): void => {
  categories.forEach((category) => {
    const option = document.createElement('option');
    option.value = category.slug;
    option.textContent = category.name;
    dropdown.appendChild(option);
  });
};