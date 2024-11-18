export const fetchProducts = async () => {
  try {
    const response = await fetch('https://dummyjson.com/products?limit=60');
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const fetchProductsByCategories = async (category) => {
  try {
    const response = await fetch(`https://dummyjson.com/products/category/${category}?limit=10`);
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
