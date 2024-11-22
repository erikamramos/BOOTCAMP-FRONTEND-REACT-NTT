import ProductList  from "./components/organisms/ProductList/ProductList";
import Filters from './components/organisms/Filters/Filters';
import { CartProvider } from './context/store/cartContext';
import { ProductProvider } from './context/store/productContext';
import MainLayout from './components/layout/MainLayout/MainLayout';

function App() {
  return (
    <>
      <ProductProvider>
        <CartProvider>
          <MainLayout>
            <Filters/>
            <ProductList/>
          </MainLayout>
        </CartProvider>
      </ProductProvider>
    </>
  )
}

export default App
