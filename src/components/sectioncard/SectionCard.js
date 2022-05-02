import React from 'react'
import Card from './card/Card'
import './SectionCard.css'

function SectionCard() {
  return (
    <div className='cardSectionCont'>
        <Card img='https://cdn1.coppel.com/images/catalog/pr/8015052-1.jpg' name='Zapatos xd' score='4.8' price='235.90'/>
        <Card img='https://m.media-amazon.com/images/I/519rz28OT5L._AC_UY395_.jpg' name='Tacones xd' score='4.2' price='2350.90'/>
        <Card img='https://assets.adidas.com/images/w_600,f_auto,q_auto/d7b3f89831c24619920ca9b4016580b7_9366/Sandalias_Adilette_Aqua_(UNISEX)_Blanco_F35539_01_standard.jpg' name='La Chancla xd' score='2.5' price='2.90'/>
        <Card img='https://m.media-amazon.com/images/I/615HxJWAMTL._AC_SX569_.jpg' name='Ouh que pedo que pedo xd' score='1.0' price='420.69'/>
    </div>
  )
}

export default SectionCard