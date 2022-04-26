import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";


const Sidebar = ({show}) => {

    return(
        <div className={`sidebar-container ${show && "show"}`}>
          <span className="sidebar-title">Shopping cart</span>
           
           <div className="buttons-container">
             <Link to="/Login" style={{textDecoration:"none"}}> 
               <button className="checkout-button">CHECKOUT</button>
             </Link>
         
             <button className="clearCar-button">CLEAR CAR</button>
           </div>
         
        </div>
    );

}

export default Sidebar;