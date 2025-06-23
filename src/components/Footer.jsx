import React from 'react'

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className='bg-dark'>
        <div className="container">
            <div className="row">
                <div className="col-md-12 py-5">
                    <h5 className="text-center text-white small">© {currentYear} - Pizzería Mamma Mia! - Todos los derechos reservados</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer