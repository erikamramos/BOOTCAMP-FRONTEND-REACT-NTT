import { Product } from '../models/Product';
import { createRatingStars } from '../utils/ratingStars';

export const renderProducts = (
  products: Product[],
  container: HTMLElement
): void => {
  container.textContent = '';

  products.forEach((product) => {
    const card = document.createElement('div');
    card.className = 'product-card';

    // Imagen del producto
    const img = document.createElement('img');
    img.className = 'product-card__image';
    img.src = product.thumbnail;
    img.alt = product.title;

    // Título
    const title = document.createElement('h3');
    title.className = 'product-card__name';
    title.textContent = product.title;

    // Categoría
    const category = document.createElement('span');
    category.className = 'product-card__category';
    category.textContent = product.category;

    // Precio
    const price = document.createElement('p');
    price.className = 'product-card__price';
    price.textContent = `$${product.price.toFixed(2)}`;

    // Rating (si está entre 0.0 y 5.0)
    const ratingContainer = createRatingStars(product.rating);
    card.appendChild(ratingContainer);

    // Botón
    const button = document.createElement('button');
    button.className = 'product-card__button';
    button.textContent = 'Add to Cart';
    button.addEventListener('click', () => incrementCart());

    const icon = document.createElement('i');
    icon.className = 'icon product-card__button-icon';
    icon.dataset.icon = 'shopping-cart';

    button.append(icon);
    card.append(img, category, title, ratingContainer, price, button);
    container.appendChild(card);
  });
};

// esto no es un componente
const incrementCart = (() => {
  let cartCount = 0;
  const cartCounterElement = document.getElementById('cart-count') as HTMLElement;

  return () => {
    cartCount += 1;
    cartCounterElement.textContent = cartCount.toString();
  };
})();
