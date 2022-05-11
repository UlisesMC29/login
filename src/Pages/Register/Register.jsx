import React from "react";
// import { Navbar } from "../../components/NavBar/navbar";
import "./register.css";
import { Link } from "react-router-dom";


export const Register = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <div className="register-container">
                <h1>REGISTER</h1>
                <div className="input-container">
                    <label>Name</label>
                    <input type="text" placeholder="Fausto Example" />
                    <label>Email</label>
                    <input type="text" placeholder="example@email.com" />
                    <label>Password</label>
                    <input type="text" placeholder="*******" />
                </div>
                <Link to="/Login" style={{ textDecoration: 'none' }}><button >Register</button></Link>
                <p>Already member? <Link to='/Login' style={{ textDecoration: 'none' }}><a>Login</a></Link> </p>
            </div>
        </div>
    );
}