import { useState } from 'react'
import Navbar from './components/Navbar'
//import Home from './components/Home'
//import Login from './components/Login'
//import Register from './components/Register'
//import Cart from './components/Cart'
import Pizza from './components/Pizza'
import Footer from './components/Footer'
import './App.css'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      {/* <Login />
      <Register /> */}
      <Pizza />
      {/* <Home /> */}
      
      {/* <Cart /> */}
      
      <Footer />
    </>
  )
}

export default App

