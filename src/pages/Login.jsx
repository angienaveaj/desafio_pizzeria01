import React, { useState } from 'react'
import Swal from 'sweetalert2'

const Login = () => {
  //datos de ingreso
  const [correo, setCorreoLogin] = useState('')
  const [password, setPassword] = useState('')
  const [errorLogin, setErrorLogin] = useState(false)
  const [errorCaracteres, setErrorCaracteres] = useState(false)
  const [mensaje, setMensaje] = useState(false)

  const validarLogin = (e) => {
    e.preventDefault();

    if (!correo.trim() || !password.trim()) {
      setErrorLogin(true);
    }
    else if (password.length < 6 ){ 
        setErrorCaracteres(true)
        setErrorLogin(false);      
    } else {
        setErrorCaracteres('')
        setErrorLogin('');
        setMensaje(true)
        Swal.fire({
                    icon: 'success',
                    title: 'Ingreso exitoso',
                    text: 'Haz ingresado correctamente a tu cuenta 🎉',
                    })
        //LImpiar inputs
        setCorreoLogin('')
        setPassword('')    
    }
    
  };

  return (
    <div className='container my-5'>
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <form action="" onSubmit={validarLogin}>
            <div className="mb-3">
              <h3>Bienvenido a Pizzería Mamma Mía</h3>
              <p>A continuación ingresa tu correo y contraseña para ingresar a tu cuenta.</p>
              <label htmlFor="exampleInputEmail1" className="form-label">Ingresa tu correo</label>
              <input type="email" className="form-control" value={correo} onChange={(event)=>setCorreoLogin(event.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Ingresa tu contraseña</label>
              <input type="password" className="form-control" value={password} onChange={(event)=>setPassword(event.target.value)} />
            </div>
            {/* <!--Mensajes--> */}
            { errorLogin ? <p className='mensaje-error alert alert-danger'>Todos los datos son obligatorios</p> : null}
            {errorCaracteres ? <p className='mensaje-error alert alert-danger'>Constraseña debe tener al menos 6 caracteres</p> : null}

            <button className="btn btn-dark">Ingresar</button>
          </form>
        </div>
        
      </div>
      
    </div>
  )
}

export default Login