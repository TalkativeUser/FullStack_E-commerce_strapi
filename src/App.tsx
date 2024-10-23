
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetails from './components/ProductDetails'
import Navbar from './Layout/Navbar'
import Login from './Authentication/Login'

function App() {

  return (
    <>

<Navbar />

      <Routes>
           <Route index element={<Home/>}  /> 
           <Route path='/about' element={<About/>}  /> 
           <Route path='/products' element={<Products/>}  /> 
           <Route path='/products/:id'  element={ <ProductDetails /> } />
           <Route path='/login'  element={ <Login /> } />
      </Routes>
    
    </>
  )
}

export default App
