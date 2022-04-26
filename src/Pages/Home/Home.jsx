import react from "react";
//import "./App.css"
import Navbar from "../../components/navbar/Navbar";
import ListItems from "../../components/listItems/ListItems";

export const Home = () =>{

    return(
        <div className="App">
            <Navbar/>
            <ListItems/>
        </div>
    );
 }