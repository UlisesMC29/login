import React from 'react'
import './Card.css';

function Card({img, name, price, score}){
    //this dont work, please fix!
    /*if(name.lenght > 10){
        name = name.slice(0,9) + "...";
        
    }*/
    console.log(name + name.lenght);
    return (
        <div className='cardCont'>
            <div className="imgCont">
                <img className='imgCard' src={img}/>
            </div>
            <div className='infoCont'>
                <p className='cardTitle'>{name}</p>
                <p className='cardScore'>{score}</p>
                <p className='cardPrice'>${price}</p>
            </div>
        </div>
    )
}

export default Card