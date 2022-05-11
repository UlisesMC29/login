import React, { useState } from "react";
// import { Navbar } from "../../components/NavBar/navbar";
import "./register.css";
import { Link } from "react-router-dom";


export const Register = () => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState(null)

    return (
        <div>
            {/* <Navbar /> */}
            <div className="register-container">
                <h1>REGISTER</h1>
                <div className="input-container">
                    <label>Email</label>
                    <input type="text" placeholder="example@email.com" onChange={e => setEmail(e.target.value)} value={email} />
                    <label>Password</label>
                    <input type="password" placeholder="*******" onChange={e => setPass(e.target.value)} value={pass} />
                </div>
                <Link to="/Login" style={{ textDecoration: 'none' }}><button >Register</button></Link>
                <p>Already member? <Link to='/Login' style={{ textDecoration: 'none' }}><a>Login</a></Link> </p>
            </div>
        </div>
    );
}