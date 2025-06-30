import { useState } from 'react'
import Navbar from './components/Navbar'
// import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Footer from './components/Footer'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Login />
      <Register />
      {/* <Home /> */}
      
      <Footer />
    </>
  )
}

export default App

