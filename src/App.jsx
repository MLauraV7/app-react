import './App.css';
import ErrorPage from './components/ErrorPage';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer';
import CheckoutHook from './components/CheckoutHook';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
      <NavBar/>
      <Routes>
        <Route path= '/' element={<ItemListContainer titulo = 'Amatista Store'/>}/>
        <Route path= '/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path= '/item/:id' element={<ItemDetailContainer/>}/>
        <Route path= '/cart' element={<CartContainer/>}/>
        <Route path= '/checkout' element={<CheckoutHook/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App