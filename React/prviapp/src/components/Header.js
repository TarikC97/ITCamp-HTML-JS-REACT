import React from 'react'
import Posts from './Posts'
import { Link, Router } from 'react-router-dom'

const Header = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'silver',
        height: '10vh',
        width: '100vw',
        fontSize: '20px',
        paddingTop: '10px'
      }}
    >
      <Link
        style={{
          textDecoration: 'none',
        }}
        to='/'
      >
        Home
      </Link>

      <div
        style={{
          fontSize: '20px',
          marginRight: '20px',
          padding: '15px',
        }}
      >
        <Link
          style={{
            textDecoration: 'none',
          }}
          to='/posts'
        >
          Posts
        </Link>
        <Link
          style={{
            textDecoration: 'none',
          }}
          to='/products'
        >
          Products
        </Link>
      </div>
    </div>
  )
}

export default Header
