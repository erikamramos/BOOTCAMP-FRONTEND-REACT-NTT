export function createStar(className: string, content: string): HTMLElement {
  const star = document.createElement('span');
  star.className = `star ${className}`;
  star.textContent = content;
  return star;
}

export function createRatingStars(rating: number): HTMLElement {
  const ratingContainer = document.createElement('div');
  ratingContainer.className = 'product-card__rating';

  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  // Agregar estrellas llenas
  for (let i = 0; i < fullStars; i++) {
    ratingContainer.appendChild(createStar('star--full', '★'));
  }

  // Agregar media estrella
  if (halfStar) {
    ratingContainer.appendChild(createStar('star--half', '☆'));
  }

  // Agregar estrellas vacías
  for (let i = 0; i < emptyStars; i++) {
    ratingContainer.appendChild(createStar('star--empty', '☆'));
  }

  return ratingContainer;
}
