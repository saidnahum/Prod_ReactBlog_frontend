import React from 'react'
import { Link } from 'react-router-dom';

const Post = ({post}) => {
   return (
      <div className="w-96 mt-0 mr-6 mb-10 ml-6">
         {post.photo && (
            <img 
            className="w-full h-72 object-cover rounded-lg"
            src={post.photo.url} 
            alt="" 
         />
         )}
         
         <div className="postInfo flex flex-col items-center">
            <div className="postCats mt-5">
               {
                  post.categories.map(category => (
                     <span className="postCat font-varela-round text-base gold leading-5 mt-4 mr-3 cursor-pointer" key={category._id}>{category.name}</span>
                  ))
               }
            </div>
            <Link to={`/post/${post._id}`}>
               <span className="postTitle font-josefin text-2xl font-bold mt-4 cursor-pointer">{post.title}</span>
            </Link>
            
            <hr />
            <span className="postDate font-lora italic text-base text-gray-500">
               {new Date(post.createdAt).toDateString()}
            </span>
         </div>
         <p className="font-varela-round text-base leading-6 mt-4 text-justify line-clamp-4">{post.desc}</p>
      </div>
   )
}

export default Post;
