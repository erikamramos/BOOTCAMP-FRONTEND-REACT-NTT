import AppRouter from './AppRouter';
import { CartProvider } from './context/store/cartContext';
import { ProductProvider } from './context/store/productContext';

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
