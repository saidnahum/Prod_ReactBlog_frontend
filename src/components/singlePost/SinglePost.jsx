import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom';


const SinglePost = () => {

   const location = useLocation();
   const path = location.pathname.split("/")[2];
   const [post, setPost] = useState({});

   useEffect(() => {
      const getPost = async () => {
         const res = await axios.get(`http://localhost:5000/api/posts/${path}`)
         setPost(res.data);
      }

      getPost()
   }, [path]);

   return (
      <div className="col-span-9">
         <div className="p-5 pr-0">
            {
               post.photo && (
                  <img
                     className="w-full h-80 object-cover rounded-lg"
                     src={post.photo} 
                     alt="" 
                  />
               ) 
            }
            <h1 className="text-center m-3 font-lora text-4xl font-bold mt-10">
               {post.title}
               <div className="float-right text-lg">
                  <i className="ml-3 cursor-pointer far fa-edit text-green-700"></i>
                  <i className="ml-3 cursor-pointer far fa-trash-alt text-red-700"></i>
               </div>
            </h1>
            <div className="mb-5 flex justify-between gold font-varela-round text-lg">
               <span>Author: 
                  <Link to={`/?user=${post.username}`}>
                     <b>{post.username}</b>
                  </Link>
                  
               </span>
               <span>Date: <b>{new Date(post.createdAt).toDateString()}</b></span>
            </div>
            <p className="text-gray-500 text-lg leading-7">{post.desc}</p>
         </div>
      </div>
   )
}

export default SinglePost
