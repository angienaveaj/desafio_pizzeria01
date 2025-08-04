import React from 'react'
import logo from '../assets/images/logotipo-de-pizza.png'
import { Link } from 'react-router-dom';

const token = false;
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
                        <Link to="/profile" className=" px-3 btn btn-outline-light mx-1">👨🏻‍🦲 Mi Perfil </Link>
                        <button className="btn btn-outline-light mx-1">🔒 Salir</button>
                        </>
                        
                    ): (
                    <>
                    <Link to="/login" className="px-3 btn btn-outline-light mx-1">🔐 Iniciar sesión </Link>
                    <Link to="/register" className="px-3 btn btn-outline-light mx-1">🔐 Registrarse </Link>
                    </>
                    )  
                    }
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="navbar-nav ms-auto ps-2">
                            <Link to="/" className="nav-link active px-3"><i className="fas fa-home me-1"></i> Home </Link>
                            <Link to="/pizza/p001" className="nav-link px-3">Pizza </Link>
                            <Link to="/cart" className="px-3 btn btn-outline-light">🛒 Total: ${totalFormateado} </Link>
                        </div>
                </div>
            </div>
        </nav>
  )
}

export default Navbar