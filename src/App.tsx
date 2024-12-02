import AppRouter from './router/AppRouter';
import { AuthProvider } from './context/store/authContext';
import { CartProvider } from './context/store/cartContext';
import { ProductProvider } from './context/store/productContext';

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <AppRouter></AppRouter>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
