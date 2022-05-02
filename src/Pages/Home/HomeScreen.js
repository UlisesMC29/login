import React from 'react'
import SectionCard from '../../components/sectioncard/SectionCard';
import './HomeScreen.css'

//This should be fixed to get  data from the backend and render categories as needed.
//The data retrieved should be sent to SectionCard as a prop, as an object
//Title should also be sent to the section card.
//In the future, section cards should have 15-28 cards stored, which can be navigated
//with a roullete.
export default function HomeScreen() {
  return (
    <div>
        <div className='sectionCont'>
            <p className='title'>Zapatos</p>
            <SectionCard/>
        </div>
        <div className='sectionCont'>
            <p className='title'>Calzado</p>
            <SectionCard/>
        </div>
        <div className='sectionCont'>
            <p className='title'>Pa las patas</p>
            <SectionCard/>
        </div>
    </div>
  )
}
