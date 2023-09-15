import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='car'>
      <h1>Ime:{props.ime}</h1>
      <h1>Prezime:{props.prezime}</h1>
      <h1>Godine:{props.godine}</h1>
    </div>
  )
}

export default Card
