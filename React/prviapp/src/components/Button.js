import React from 'react'
import "./button.css"

const Button = (props) => {
  return (
    <div>
        <button className='button'>{props.tekst}</button>
    </div>
  )
}

export default Button
