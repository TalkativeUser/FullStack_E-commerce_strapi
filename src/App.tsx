
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetails from './components/ProductDetails'
import Login from './Authentication/Login'
import AppLayOut from './Layout/AppLayOut'
import cookieService from './services/cookieService'
import CartDrawer from './components/CartDrawer'
import DashboardLayout from './components/DashboardLayout'
import AdminDashboard from './pages/Dashboard'

function App() {

  const isAuth =cookieService.get('jwt')

  return (
    <>


      <Routes>

        <Route path='/' element={<AppLayOut />} >

            <Route  index element={<Home/>}  /> 
            <Route path='/about' element={<About/>}  /> 
            <Route path='/products' element={<Products/>}  /> 
            <Route path='/products/:id'  element={ <ProductDetails /> } />

        </Route>

        <Route path='/dashboard' element={<DashboardLayout />} >

            <Route  index element={<AdminDashboard/>}  /> 

        </Route>







        <Route path='/login'  element={ <Login isAuth={isAuth} /> } />
         
      </Routes>
    
    <CartDrawer />
    </>
  )
}

export default App
