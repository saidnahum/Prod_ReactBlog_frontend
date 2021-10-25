import React from 'react'
import Post from '../components/post/Post'

const Posts = () => {
   return (
      <div className="col-span-9 m-10">
         <div className="flex flex-wrap items-center justify-center">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
         </div>
      </div>
   )
}

export default Posts
