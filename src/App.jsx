import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/itemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import Category from './components/Categories/category';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer/> } />
          <Route path='/category/:idCategory' element={ <ItemListContainer/> } />
          <Route path='/item/:idItem' element={ <ItemDetailContainer/> } />
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
