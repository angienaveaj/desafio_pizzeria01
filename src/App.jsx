import { useState } from 'react'
import Navbar from './components/navbar'
import Home from './components/Home'
import './App.css'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  )
}

export default App

