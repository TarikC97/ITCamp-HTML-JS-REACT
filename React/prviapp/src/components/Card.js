import React from 'react'
import "./card.css"

const Card = (props) => {
//Destructring object
 //const {ime,age} = props
  return (
    <div className="card">
    <h1>{props.ime}</h1>
    <h3>
       Neki opis kratki o meni.
    </h3>
    <p>{props.age}</p>
    </div>
  )
}

export default Card