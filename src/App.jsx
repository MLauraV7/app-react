import './App.css'
import ErrorPage from './components/ErrorPage'
import ItemCount from './components/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path= '/' element={<ItemListContainer titulo = 'Amatista Store'/>}/>
        <Route path= '/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path= '/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App