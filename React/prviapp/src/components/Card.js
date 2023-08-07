import React from 'react'
import "./card.css"
import Button from './Button'

const Card = (props) => {
  
const {price}= props
//Destructring object
 //const {ime,age} = props
  return (
    <div className="card">
     {props.image1}
    <h1>{props.name}</h1>
    <h3>
       {props.desc}
    </h3>
    <Button body={price} />
    </div>
  )
}

export default Card