import React from 'react'

const Product = ({ ime, cena }) => {
  return (
    <div>
      <h1>{ime}</h1>
      <h2>{cena}</h2>
    </div>
  )
}

export default Product
