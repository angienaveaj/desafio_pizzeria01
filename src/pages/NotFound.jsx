import { Link } from "react-router-dom"
import img404 from '../assets/images/img-404.png'

const NotFound = () => {
  return (
    <>
      <section className="d-flex align-items-center min-vh-100 py-5">
          <div className="container py-5">
              <div className="row align-items-center">
                  <div className="col-md-6 order-md-2">
                      <div className="lc-block">
                          <img src={img404} alt="img-notfound" className="img-notfound" width="100%" />
                      </div>
                  </div>
                  <div className="col-md-6 text-center text-md-start ">
                      <div className="lc-block mb-3">
                          <div editable="rich">
                              <h1 className="fw-bold h5">PÁGINA NO ENCONTRADA</h1>
                          </div>
                      </div>
                      <div className="lc-block mb-3">
                          <div editable="rich">
                              <h1 className="display-1 fw-bold">Error 404</h1>

                          </div>
                      </div>
                      <div className="lc-block mb-5">
                          <div editable="rich">
                              <p className="rfs-11 fw-light"> La página que buscas no está disponible, quizás fue removida o no existe.</p>
                          </div>
                      </div>
                      <div className="lc-block">
                          <Link to="/" className="px-3 btn btn-dark mx-1">Volver al Home </Link>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
    
  )
}

export default NotFound