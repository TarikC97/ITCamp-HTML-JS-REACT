import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Posts = () => {
  const [post, setPost] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    axios.get('https://dummyjson.com/posts').then((response) => {
      setPost(response.data.posts)
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
        <h1
          onClick={() => navigate(`/posts/${pot.id}`)}
          style={{ textAlign: 'center' }}
          key={pot.id}
        >
          {pot.title}
        </h1>
      ))}
    </div>
  )
}

export default Posts
