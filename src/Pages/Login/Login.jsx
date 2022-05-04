import React from "react";
import { Link } from "react-router-dom";
// import Navbar from "../../components/navbar/Navbar";
import "../Login/Login.css";


export const Login = () => {
    return (

        <div className="login-container">
            {/* <Navbar />   ELIMINADO PORQUE LA NAVBAR ESTA ASIGNADA EN APP.JS*/}

            <h1>Login</h1>
            <div className='input-container'>
                <label>Email</label>
                <input type="text" name="" id="" placeholder="example@mail.com" />
            </div>
            <div className='input-container'>
                <label>Password</label>
                <input type="password" name="" id="" placeholder="*****" />
            </div>
            <button >Login</button>
            <div className="fnText-container">
                <p>Not register yet? <Link to='/Register' style={{ textDecoration: 'none' }}><a>Register</a></Link> </p>
            </div>

        </div >

    );
}