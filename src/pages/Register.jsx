import React, { useState, useContext } from 'react'
import Swal from 'sweetalert2'
import { UserContext } from '../context/UserProvider'

const Register = () => {
  //datos de Registro
  const [correo, setCorreoRegister] = useState('')
  const [password01, setPassword01] = useState('')
  const [password02, setPassword02] = useState('')
  const [errorRegister, setErrorRegister] = useState(false)
  const [errorCaracteres, setErrorCaracteres] = useState(false)
  const [errorCoincidencia, setErrorCoincidencia] = useState(false)
  const [mensaje, setMensaje] = useState(false)
  const {register} = useContext(UserContext)

  const validarRegister = (e) => {
    e.preventDefault();

    if (!correo.trim() || !password01.trim() || !password02.trim()) {
      setErrorRegister(true);
    }
    else if (password01.length < 6 ){ 
        setErrorCaracteres(true)
        setErrorRegister(false);      
    } else if (password01 !== password02) {
        setErrorCoincidencia(true)
        setErrorCaracteres(false)
        setErrorRegister(false);
    }
    else {
        setErrorCaracteres(false)
        setErrorRegister(false);
        setErrorCoincidencia(false)
        setMensaje(true)
        register({email: correo, password: password01})

        Swal.fire({
            icon: 'success',
            title: 'Registro exitoso',
            text: 'Haz creado tu cuenta correctamente 🎉',
            })
        //LImpiar inputs
        setCorreoRegister('')
        setPassword01('')
        setPassword02('')        
    }
    
  };

  return (
    <div className='container my-5'>
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <form action="" onSubmit={validarRegister}>
            <div className="mb-3">
              <h3>Registrate en Pizzería Mamma Mía</h3>
              <p>A continuación ingresa tu correo y crea tu contraseña.</p>
              <label htmlFor="exampleInputEmail1" className="form-label">Ingresa tu correo</label>
              <input type="email" className="form-control" value={correo} onChange={(event)=>setCorreoRegister(event.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Ingresa tu contraseña</label>
              <input type="password" className="form-control password01" value={password01} onChange={(event)=>setPassword01(event.target.value)} />
              <label htmlFor="exampleInputPassword1" className="form-label">Vuelve a escribir tu contraseña</label>
              <input type="password" className="form-control password02" value={password02} onChange={(event)=>setPassword02(event.target.value)} />
            </div>
            {/* <!--Mensajes de error--> */}
            { errorRegister ? <p className='mensaje-error alert alert-danger'>Todos los datos son obligatorios</p> : null}
            {errorCaracteres ? <p className='mensaje-error alert alert-danger'>Constraseña debe tener al menos 6 caracteres</p> : null}
            {errorCoincidencia ? <p className='mensaje-error alert alert-danger'> Ambas contraseñas no coinciden</p> : null}
            {/* <!--Mensajes de exito--> */}
            {mensaje && <p className="alert alert-success">¡Cuenta creada con éxito!</p>}

            <button className="btn btn-dark">Ingresar</button>
          </form>
        </div>
        
      </div>
      
    </div>
  )
}

export default Register