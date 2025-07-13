import React from 'react'
import { useEffect, useState } from 'react'

const ApiPizzas = () => {
    let [pizzas, setPizzas] = useState([])

    useEffect(() => {
      fetch('http://localhost:5000/api/pizzas')
      .then(response => response.json())
      .then(data => setPizzas(data))

    }, []);
    
  return (
    <div className='row'>
        {pizzas.map((pizza, index) =>(
            <article className="col-md-3 my-2">
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
                        <button className="btn btn-dark">Ver más 👁️</button>
                        <button className="btn btn-outline-dark">Añadir 🛒</button>
                    </div>
                </div>
            </article>
        ))}
    </div>
  );
};

export default ApiPizzas