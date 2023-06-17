import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/itemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/cart';
import { CartProvider } from './Context/CartContext';

function App() {
  return (
    <>
      <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer/> } />
          <Route path='/category/:idCategory' element={ <ItemListContainer/> } />
          <Route path='/item/:idItem' element={ <ItemDetailContainer/> } />
          <Route path='/cart' element = { <Cart/> } />
          <Route path='*' element={<h2>Site not Found. Sorry for the inconvenience!</h2>} />
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
