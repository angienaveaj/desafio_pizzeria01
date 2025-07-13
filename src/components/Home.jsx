import React from 'react'
import Header from './header'
import Card from './Card'
import { pizzas } from '../utils/pizzas'


const Home = () => {
  return (
    <main className="">
        <Header />
        <div className="container-fluid py-5">
            <div className="row d-flex justify-content-center">
                {
                    pizzas.map( (pizza,index ) => 
                        <Card 
                            image={pizza.img}
                            title={pizza.name}
                            ingredients = {pizza.ingredients}
                            price = {pizza.price}
                        />
                    )
                }
            </div>
        </div>
    </main>
  )
}

export default Home