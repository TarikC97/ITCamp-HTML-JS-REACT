import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='car'>
      <h1>Stvari za kupovinu</h1>
      <h1>Ime:{props.ime}</h1>
      <h1>Marka:{props.marka}</h1>
      <h1>Cena:{props.cena}</h1>
      <h1>Status:{props.status ? '<>' : 'X'}</h1>
    </div>
  )
}

export default Card
