import React from 'react'

const Card = ({image, title, price, description}) => {
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
            <p className="card-text h6 fw-light text-center">{Array.isArray(description) ? description.join(', ') : description}</p>
            <hr />
            <ul className="list-group list-group-flush text-right">
              <li className="list-group-item ms-auto fw-light gris py-0">
                <span className="h5 fw-bold green ms-3">${price.toLocaleString('es-CL')}</span>
              </li>
            </ul>
          </div>
          <div className="card-footer d-flex justify-content-evenly">
            <button className="btn btn-dark">Ver más</button>
            <button className="btn btn-outline-dark">Añadir</button>
          </div>
        </div>
    </article>
  )
}

export default Card