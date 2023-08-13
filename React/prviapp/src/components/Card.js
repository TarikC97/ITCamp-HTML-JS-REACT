import React from 'react'
import "./card.css"
import Button from './Button'

const Card = (props) => {

  
// const {price}= props
//Destructring object
 //const {ime,age} = props
  return (
    <div className="card">
      <h1>Title:{props.name}</h1>
      <h3>
        Description:{props.desc}
      </h3>
      <h3>
        Price:{props.price}$
      </h3>
      <h3>
        Discount:{props.discount}%
      </h3>
      <h3>
        Brand:{props.brand}
      </h3>
      <h3>
        Stock:{props.stock}
      </h3>

    <Button className='button1' body={'Add to the Cart'} />
    </div>
  )
}

export default Card