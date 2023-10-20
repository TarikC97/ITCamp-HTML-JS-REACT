import React from 'react'
import { Link, Router } from 'react-router-dom'

const HomePage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        height: '90vh',
        width: '100vw',
      }}
    >
      <h1>Welcome to my HomePage</h1>
      <p>If you want to see products , go to </p>
      <Link to='/products'>Products</Link>
    </div>
  )
}

export default HomePage
