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


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CartProvider>
        <DataProvider>
          <Navbar />
          <Routes >
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/pizza/p001' element={<Pizza />} />
            <Route path='/profile' element={<Profile />} />
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

