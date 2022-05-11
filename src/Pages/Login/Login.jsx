import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Navbar from "../../components/navbar/Navbar";
import "../Login/Login.css";




export const Login = () => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState(null)

    const procesarDatos = (e) => {
        e.preventDefault()
        if (!email.trim()) {
            // console.log('Ingrese el email')
            setError('Ingresar un email para continuar')
            return
        }

        if (!pass.trim()) {
            // console.log('Ingrese una contraseña')
            setError('Ingrese una contraseña para continuar')
            return
        }

        setError(null)
    }

    return (

        <form onSubmit={procesarDatos}>

            <div className="login-container">
                {/* <Navbar />   ELIMINADO PORQUE LA NAVBAR ESTA ASIGNADA EN APP.JS*/}

                <h1>Login</h1>
                {
                    error && (
                        <div className="alert-error">
                            {error}
                            <br />
                        </div>
                    )
                }
                <div className='input-container'>
                    <label>Email</label>
                    <input type="text" name="" id="" placeholder="example@mail.com" onChange={e => setEmail(e.target.value)} value={email} />
                </div>
                <div className='input-container'>
                    <label>Password</label>
                    <input type="password" name="" id="" placeholder="*****" onChange={e => setPass(e.target.value)} value={pass} />
                </div>
                {/* <Link to="/" style={{ textDecoration: 'none' }}><button >Login</button></Link> */}
                <button >Login</button>
                <div className="fnText-container">
                    <p>Not register yet? <Link to='/Register' style={{ textDecoration: 'none' }}><a>Register</a></Link> </p>
                </div>

            </div >

        </form>

    );
}