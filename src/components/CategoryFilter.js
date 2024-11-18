export const filterByCategory = (products, category) => {
  return category ? products.filter((product) => product.category === category) : products;
};

export const populateCategories = (categories, dropdown) => {
  categories.forEach((category) => {
    const option = document.createElement('option');
    option.value = category.slug;
    option.textContent = category.name;
    dropdown.appendChild(option);
  });
};
