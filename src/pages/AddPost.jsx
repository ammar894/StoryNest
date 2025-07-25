import React from 'react'
import { Container, PostForm } from '../components'

function AddPost() {
  return (
    <div className='py-8 bg-gradient-to-l from-blue-200 to-purple-300 min-h-screen '>
      <Container>
          <PostForm />
      </Container>
           
    </div>
  )
}

export default AddPost