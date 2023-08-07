import React from 'react'
import "./button.css"

//(props) <=> {tekst}
const Button = (props) => {
  return (
    <div className='btn'>
        <button onClick={()=>alert('Product successfully added to the cart!')} className='button'>{props.body}</button>
    </div>
  )
}

export default Button
