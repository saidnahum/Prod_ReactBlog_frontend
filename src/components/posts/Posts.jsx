import React from 'react'
import Post from '../post/Post'

const Posts = ({posts}) => {
   return (
      <div className="col-span-9 m-10">
         <div className="flex flex-wrap items-center justify-center">
            {
               posts.map(post => (
                  <Post post={post} key={post._id}/>
               ))
            }
            
         </div>
      </div>
   )
}

export default Posts
