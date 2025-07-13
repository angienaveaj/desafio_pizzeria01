import React from 'react'
import Header from './header'
import Card from './Card'
//import { pizzas } from '../utils/pizzas'
import ApiPizzas from './ApiPizzas'


const Home = () => {
  return (
    <main className="">
        <Header />
        <div className="container-fluid py-5">
            <div className="row d-flex justify-content-center">
                <ApiPizzas />
            </div>
        </div>
    </main>
  )
}

export default Home