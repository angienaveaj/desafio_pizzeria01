import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartProvider';

const Pizza = () => {
    let [pizza, setPizza] = useState(null)
    const {agregarCarrito} = useContext(CartContext)

    const {id} = useParams();
    //console.log(id)

    useEffect(() => {
      fetch(`http://localhost:5000/api/pizzas/${id}`)
      .then(response => response.json())
      .then(data => setPizza(data))

    }, []);

    if (!pizza) return <p className='text-center'>Cargando</p>;
    
  return (
    // Single page pizza
    <div className="container">
        <div className='row my-4'>
            <div className="col-md-6">
                <img key={pizza.img} src={pizza.img} alt={pizza.name} id={pizza.id} />
            </div>
                    
            <div className="col-md-6">
                <h1 className="card-title fw-regular mb-3">
                    {pizza.name}
                </h1>
                <hr />
                <h5 className="fw-600 mb-3">Ingredientes:</h5>
                <p className="card-text h6 fw-light ingredientes">
                    Descripción: {pizza.ingredients ? pizza.ingredients.join(', ') : pizza.desc}
                </p>
                <hr />
                <div className="list-group list-group-flush">
                    <p>{pizza.desc}</p>
                    <h5 className="fw-bold precio">Precio: ${pizza.price.toLocaleString('es-CL')}</h5>
                </div>
                <div className="d-flex justify-flex-start mt-2">
                    <button className="btn btn-outline-dark" onClick={() => agregarCarrito(pizza)}>Añadir 🛒</button>
                </div>  
            </div>
                    
        </div>
    </div>
        
  );
};

export default Pizza