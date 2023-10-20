import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Posts = () => {
  const [post, setPost] = useState([])
  useEffect(() => {
    axios.get('https://dummyjson.com/posts').then((response) => {
      setPost(response.data.posts)
      // console.log(response.data.products)
    })
  }, [])
  console.log(post)
  return (
    <div
      style={{
        textAlign: 'center',
        backgroundColor: 'lightblue',
        height: '90vh',
        width: '100vw',
      }}
    >
      Posts
      {post.map((pot) => (
        <h1 style={{ textAlign: 'center' }} key={pot.id}>
          {pot.title}
        </h1>
      ))}
    </div>
  )
}

export default Posts
