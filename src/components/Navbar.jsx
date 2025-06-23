import React from 'react'
import logo from '../assets/images/logotipo-de-pizza.png'

const token = true;
const total = 25000;
let totalFormateado = total.toLocaleString('es-CL');

function Navbar () {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark text-white">
            <div className="container-fluid">
                <a className="navbar-brand ms-2" href="#"><img src={logo} alt="Cuppon" className="cupon" width="100px" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>  
                </button>
                {token ? (
                        <>
                        <button className="btn btn-outline-light mx-1">👨🏻‍🦲 Mi Perfil</button>
                        <button className="btn btn-outline-light mx-1">🔒 Salir</button>
                        </>
                        
                    ): (
                    <>
                    <button className="btn btn-outline-light mx-1">🔐 Iniciar sesión</button>
                    <button className="btn btn-outline-light mx-1">🔐 Registrarse</button> 
                    </>
                    )  
                    }
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav ms-auto ps-2">
                    <a className="nav-item nav-link active" href="#">🍕 Home</a>
                    <a className="nav-item nav-link" href="#">Productos</a>
                    <a className="nav-item nav-link" href="#">Contacto</a>
                    <a className="btn btn-outline-light" href="#">🛒 Total: ${totalFormateado}</a>
                    </div>
                </div>
            </div>
        </nav>
  )
}

export default Navbar