import React from 'react'

const Card = (props) => {
    var ime = ""
    var prezime = ""
  return (
    <>
    <h1>Ime:{props.ime}</h1>
    <h1>Prezime:{props.prezime}</h1>
    </>
  )
}

export default Card