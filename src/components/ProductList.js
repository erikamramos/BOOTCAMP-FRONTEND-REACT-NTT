export const renderProducts = (products, container) => {
  container.textContent = '';
  products.forEach((product) => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card product-card--item';

    // Imagen
    const img = document.createElement('img');
    img.className = 'product-card__image';
    img.src = product.thumbnail;
    img.alt = product.title;

    // Nombre
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
    price.textContent = `Precio: $${product.price}`;

    // Botón
    const button = document.createElement('button');
    button.className = 'product-card__button';
    button.textContent = 'Agregar al carrito';
    button.addEventListener('click', () => incrementCart());

    const icon = document.createElement('i');
    icon.className = 'icon product-card__button-icon';
    icon.dataset.icon = 'shopping-cart';
    
    // Create Card
    button.append(icon);
    productCard.append(img, category, title, price, button);
    container.appendChild(productCard);
    
  });
};

const incrementCart = (() => {
  let cartCount = 0;
  const cartCounterElement = document.getElementById('cart-count');
  return () => {
    cartCount += 1;
    cartCounterElement.textContent = cartCount;
  };
})(); // por qué un iief?
