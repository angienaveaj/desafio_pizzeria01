import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import { CartContext } from '../context/CartProvider';
import { DataContext } from '../context/DataProvider';
import { Link } from 'react-router-dom';

const ApiPizzas = () => {
    const {pizzas} = useContext(DataContext)

    const {agregarCarrito} = useContext(CartContext)

  return (
    // Cards que van en el home
    <div className='row'>
        {pizzas.map((pizza, index) =>(
            <article className="col-md-3 my-2" key={pizza.id}>
                <div className="card mx-2 h-100">
                    <img key={index} src={pizza.img} alt={pizza.name} />
                    <div className="card-body">
                        <h5 className="card-title fw-light mb-3">
                        {pizza.name}
                        </h5>
                        <hr />
                        <h5 className="card-title fw-light mb-3 text-center">Ingredientes:</h5>
                        <p className="card-text h6 fw-light text-center">
                            {pizza.ingredients ? pizza.ingredients.join(', ') : pizza.desc}
                        </p>
                        <hr />
                        <div className="list-group list-group-flush text-center">
                            <p>{pizza.desc}</p>
                            <h5 className="fw-bold precio ms-3 d-flex justify-content-center">Precio: ${pizza.price.toLocaleString('es-CL')}</h5>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-evenly">
                        <Link to={`/pizza/${pizza.id}`} className="btn btn-dark">Ver más 👁️</Link>
                        <button className="btn btn-outline-dark" onClick={() => agregarCarrito(pizza)}>Añadir 🛒</button>
                    </div>
                </div>
            </article>
        ))}
    </div>
  );
};

export default ApiPizzas