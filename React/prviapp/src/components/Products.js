import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Products = () => {
  const [post, setPost] = useState([])
  useEffect(() => {
    axios.get('https://dummyjson.com/products').then((response) => {
      setPost(response.data.products)
      // console.log(response.data.products)
    })
  }, [])
  console.log(post)
  return (
    <div
      style={{
        backgroundColor: 'beige',
        height: '90vh',
        width: '100vw',
        textAlign: 'center',
      }}
    >
      Products
      {post.map((product) => (
        <h1 style={{ textAlign: 'center' }} key={product.id}>
          {product.title}
        </h1>
      ))}
    </div>
  )
}

export default Products
