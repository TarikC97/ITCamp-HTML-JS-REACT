import React, { useState } from 'react'
import Product from './Product'

const Forme = (props) => {
  const [number, setNumber] = useState(12)

  const [products, setProducts] = useState([
    { ime: 'Adidas', cena: 120, inCart: false },
    { ime: 'Puma', cena: 200, inCart: false },
    { ime: 'Nike', cena: 300, inCart: false },
    { ime: 'Reebok', cena: 70, inCart: true },
    { ime: 'Diadora', cena: 120, inCart: true },
  ])
  const inCartProducts = products.filter((product) => product.inCart)
  const nikeProduct = products.filter((product) => product.name === 'Nike')
  return (
    <div>
      {inCartProducts.length > 0 ? (
        inCartProducts.map((product) => (
          <Product ime={product.ime} cena={product.cena} />
        ))
      ) : (
        <h1>Nemate proizvod u korpi</h1>
      )}
      <button
        onClick={() =>
          setProducts((prev) => [
            ...prev,
            (prev[2] = { ...prev[2], inCart: true }),
          ])
        }
      >
        Dodaj u Korpu
      </button>
      {/*Domaci: -36-5 vrlo hladno, -5-15 hladno,20-40 vrelo, menja se background color u zavisnosti od temp */}
    </div>
  )
}

export default Forme
