import React from 'react'
import { Link } from 'react-router-dom';

const Post = () => {
   return (
      <div className="w-96 mt-0 mr-6 mb-10 ml-6">
         <img 
            className="w-full h-72 object-cover rounded-lg"
            src="https://images.unsplash.com/photo-1580894908361-967195033215?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" 
            alt="" 
         />
         <div className="postInfo flex flex-col items-center">
            <div className="postCats mt-5">
               <span className="postCat font-varela-round text-base gold leading-5 mt-4 mr-3 cursor-pointer">Music</span>
               <span className="postCat font-varela-round text-base gold leading-5 mt-4 mr-3 cursor-pointer">Life</span>
            </div>
            <span className="postTitle font-josefin text-2xl font-bold mt-4 cursor-pointer">
               <Link to="/post/:postId">Lorem ipsum dolor sit amet.</Link>
            </span>
            <hr />
            <span className="postDate font-lora italic text-base text-gray-500">
               1 hour ago
            </span>
         </div>
         <p className="font-varela-round text-base leading-6 mt-4 text-justify line-clamp-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium iusto ullam rem, tempore blanditiis quidem tempora, ducimus in iste quo facere error recusandae deserunt et exercitationem facilis nemo similique. Rerum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium iusto ullam rem, tempore blanditiis quidem tempora, ducimus in iste quo facere error recusandae deserunt et exercitationem facilis nemo similique. Rerum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium iusto ullam rem, tempore blanditiis quidem tempora, ducimus in iste quo facere error recusandae deserunt et exercitationem facilis nemo similique. Rerum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium iusto ullam rem, tempore blanditiis quidem tempora, ducimus in iste quo facere error recusandae deserunt et exercitationem facilis nemo similique. Rerum!</p>
      </div>
   )
}

export default Post;
