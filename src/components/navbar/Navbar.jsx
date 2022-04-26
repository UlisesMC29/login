import React , {useState}from "react";
import "./navbar.css";
import { FaCartPlus } from "react-icons/fa";
import {FaStore} from "react-icons/fa";
import { Link } from 'react-router-dom';
import Sidebar from "../sidebar/Sidebar";



const Navbar = () => {

   const [show, setShow] = useState(false)
   return(
   <div className="navbar-container">
      
      <div className="left"> 
         <Link to="/" style={{textDecoration:"none"}} >
          <FaStore className="icon-store"/>
          <span className="store-name"> Fake Store </span>
         </Link>
      </div>
      
      <div className="right">
       <Link to="/Store" style={{textDecoration:"none"}}>
          <span className="store-span"> Store</span>
       </Link>

       <Link to="/Login" style={{textDecoration:"none"}}> 
          <span className="login-span">Login</span>
       </Link>
       <FaCartPlus className="icon-cart" onClick={ ()=> setShow(!show)}/>
      </div>
      <Sidebar show={show}/>
   </div>
   )
   
}

export default Navbar;
