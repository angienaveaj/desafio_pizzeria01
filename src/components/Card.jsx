import React from 'react'

const Card = ({image, title, price, ingredients}) => {
  return (
    <article className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 my-4">
        <div className="card mx-2">
          <img src={image} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title fw-light mb-3">
              {title}
            </h5>
            <hr />
            <h5 className="card-title fw-light mb-3 text-center">Ingredientes:</h5>
            <p className="card-text h6 fw-light text-center">{Array.isArray(ingredients) ? ingredients.join(', ') : description}</p>
            <hr />
            <div className="list-group list-group-flush text-center">
                <h5 className="fw-bold precio ms-3 d-flex justify-content-center">Precio: ${price.toLocaleString('es-CL')}</h5>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-evenly">
            <button className="btn btn-dark">Ver más 👁️</button>
            <button className="btn btn-outline-dark">Añadir 🛒</button>
          </div>
        </div>
    </article>
  )
}

export default Card