import { fetchProducts, fetchProductsByCategories } from '../services/fetchProducts.js';
import { fetchCategories } from '../services/fetchCategories.js';
import { renderProducts } from '../components/ProductList.js';
import { searchProducts } from '../components/SearchBox.js';
import { filterByCategory, populateCategories } from '../components/CategoryFilter.js';

const productListElement = document.getElementById('product-list');
const searchBoxElement = document.getElementById('search-box');
const categoryFilterElement = document.getElementById('category-filter');

let allProducts = [];

// Inicializar
const initializeApp = async () => {
  allProducts = await fetchProducts();
  const categories = await fetchCategories();

  renderProducts(allProducts, productListElement);
  populateCategories(categories, categoryFilterElement);
};

// Buscar productos
searchBoxElement.addEventListener('input', (e) => {
  const searchQuery = e.target.value;
  const filteredProducts = searchProducts(allProducts, searchQuery);
  renderProducts(filteredProducts, productListElement);
});

// Filtrar por categoría
categoryFilterElement.addEventListener('change', async (e) => {
  const category = e.target.value;
  const filteredProducts = await fetchProductsByCategories(category);
  renderProducts(filteredProducts, productListElement);
});

// Inicializar aplicación
initializeApp();
