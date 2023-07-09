import productsJson from './mocks/products.json'
import { Products } from './components/products.tsx'
import { useState } from 'react';
import { Header } from './components/header.tsx';
import { useFilters } from './hooks/useFilters.ts';
import { Cart } from './components/cart.tsx';
import { CartProvider } from './context/cart.context.tsx';

function App () {
  const [products] = useState(productsJson.products)
  const { filterProducts } = useFilters()


  const filteredProducts = filterProducts(products)

  return (
    <>
      <CartProvider>
        <Header />
        <Products products={filteredProducts} />
        <Cart />
      </CartProvider>
    </>
  )
}

export default App
