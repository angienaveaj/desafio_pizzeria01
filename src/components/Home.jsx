import React from 'react'
import Header from './header'
import Card from './Card'
import pizza01 from '../assets/images/pizza-napolitana.jpg'
import pizza02 from '../assets/images/pizza-española.jpg'
import pizza03 from '../assets/images/pizza-pepperoni.jpg'


const Home = () => {
  return (
    <main className="">
        <Header />
        <div className="container-fluid py-5">
            <div className="row d-flex justify-content-center">
                <Card 
                    image={pizza01}
                    title="Pizza Napolitana"
                    description = {["mozzarella", "tomates", "jamón", "orégano"]}
                    price = {5950}
                />
                <Card 
                    image={pizza02}
                    title="Pizza Española"
                    description = {["mozzarella", "gorgonzola", "parmesano", "provolone"]}
                    price = {6950}
                />
                <Card 
                    image={pizza03}
                    title="Pizza Pepperoni"
                    description = {["mozzarella", "pepperoni", "orégano"]}
                    price = {6950}
                />
            </div>
        </div>
    </main>
  )
}

export default Home