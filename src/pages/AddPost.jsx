import React from 'react'
import Container  from '../conponents/container/Container'
import  PostForm  from '../conponents/post-form/PostForm'
function AddPost() {
  return (
    <div className='py-8'>
    <Container>
        <PostForm />
    </Container>
      
    </div>
  )
}

export default AddPost
