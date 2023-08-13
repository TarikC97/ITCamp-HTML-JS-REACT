import React from 'react'

//(props) <=> {tekst}
const Button = (props) => {
  return (
    <div className='btn'>
        <button onClick={()=>alert('Product successfully added to the cart!')}>{props.body}</button>
    </div>
  )
}

export default Button
