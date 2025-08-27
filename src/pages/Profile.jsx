import imgPerfil from '../assets/images/foto-perfil.jpg'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe, faClipboard, faTruck, faFileInvoice, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../context/UserProvider';
import { useContext, useEffect } from 'react';

const Profile = () => {
  const {email, logout, obtenerUsuario} = useContext(UserContext)

  useEffect(() => {
    if(!email){
      obtenerUsuario();
    }
  }, [])


  return (
    <>    
<section style={{ backgroundColor: "#eee" }}>
  <div className="container py-5">
    <div className="row">
      <div className="col-lg-4">
        <div className="card mb-4 card-info-principal">
          <div className="card-body text-center">
            <img src={imgPerfil} alt="avatar"
              className="rounded-circle img-fluid img-perfil" />
            <h5 className="my-3">Johna Smith</h5>
            <p className="text-muted mb-4">{email || ''}</p>
          </div>
        </div>
        <div className="card mb-4 menu-dashboard">
          <div className="card-body card-menu-dashboard">
            <div className="row">
              <div className="col-sm-12">
                <p className="mb-0"><FontAwesomeIcon icon={faClipboard} /> Historial de pedidos</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-12">
                <p className="mb-0"><FontAwesomeIcon icon={faTruck} /> Seguir pedido</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-12">
                <p className="mb-0"><FontAwesomeIcon icon={faFileInvoice} /> Mis boletas</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-12">
                <button className="mb-0 btn-light p-0 bg-transparent" onClick={logout}><FontAwesomeIcon icon={faArrowRightToBracket} /> Cerrar sesión</button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="col-lg-8">
        <div className="card mb-4">
          <div className="card-body card-info-perfil-der">
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Nombre y apellido:</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">Johnatan Smith</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Correo electrónico</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{email || ''}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Fono</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">+56 9234-5678</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Dirección</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">Av. Las Maravillas 303, Viña del Mar, V región. Chile</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Profile