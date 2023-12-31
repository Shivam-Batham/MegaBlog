
import React, {useState,useEffect} from 'react'
import appwriteService from '../appwrite/configuration'
import {Container ,PostCard} from "../conponents"
function AllPost() {
    const [post , setPosts] = useState([]);
    useEffect(()=>{},[])
    appwriteService.getPosts([]).then((pots)=>{
        if(posts){
            setPosts(posts.documents)
        }
    })

  return (
    <div className='w-full py-8'>
      <Container >
        <div className='flex flex-wrap'>
        {
            PostCard.map((post)=>(
                <div key={post.$id} className='p-2 w-1/4'>
                    <PostCard post={post} />
                </div>
            ))
        }

        </div>
      </Container>
    </div>
  )
}

export default AllPost
