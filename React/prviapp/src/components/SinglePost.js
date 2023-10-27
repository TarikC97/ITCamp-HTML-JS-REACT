import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState([])
  const { id } = useParams()
  useEffect(() => {
    axios.get(`https://dummyjson.com/posts/${id}`).then((response) => {
      setSinglePost(response.data)
    })
  }, [])
  //console.log(singlePost)
  return (
    <div
      style={{
        textAlign: 'center',
        backgroundColor: 'purple',
        height: '90vh',
        width: '100vw',
      }}
    >
      SinglePost
      <h1>
        Id:{singlePost.id}
        <br></br>
        Title:{singlePost.title}
      </h1>
    </div>
  )
}

export default SinglePost
