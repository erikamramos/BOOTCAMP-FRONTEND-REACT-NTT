export const incrementCart = (() => {
  let cartCount = 0;
  const cartCounterElement = document.getElementById('cart-count') as HTMLElement;

  return () => {
    cartCount += 1;
    cartCounterElement.textContent = cartCount.toString();
  };
});