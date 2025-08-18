import { useState } from 'react'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import Pizza from './pages/Pizza'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CartProvider from './context/CartProvider'
import DataProvider from './context/DataProvider'
import { useContext } from 'react'
import { UserContext } from './context/UserProvider'
import { Navigate } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)
  const {token} = useContext(UserContext) //traemos en token

  return (
    <>
      <CartProvider>
        <DataProvider>
          <Navbar />
          <Routes >
            <Route path='/' element={<Home />} />
            {/*si el token es false redirige al login, si es true redirige al home*/}
            <Route path='/login' element={token === false ? <Login /> : <Navigate to="/" />} />
            <Route path='/register' element={token === false ? <Register /> : <Navigate to="/" />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/pizza/:id' element={<Pizza />} />
            <Route path='/profile' element={token ? <Profile /> : <Navigate to="/login" />} />
            <Route path='/404' element={<NotFound />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </DataProvider>
      </CartProvider>
      
      <Footer />
    </>
  )
}

export default App

