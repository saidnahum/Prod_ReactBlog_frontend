import React from 'react'

const Sidebar = () => {
   return (
      <div className="col-span-3 m-5 pb-8 bg-gray-50 rounded-t-xl flex flex-col items-center">
         <div className="flex flex-col items-center mt-5">
            <span className="m-2 p-1 w-4/5 border-t-2 border-b-2 border-gray-200 font-varela-round text-lg font-normal text-center">ABOUT ME</span>
            <img className="mt-4 p-5" src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1931&q=80" alt="" />
            <p className="p-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate quisquam placeat recusandae odio assumenda fuga unde dolorum.</p>
         </div>

         <div className="flex flex-col items-center w-5/6">
            <span className="m-2 p-1 w-4/5 border-t-2 border-b-2 border-gray-200 font-varela-round text-lg font-normal text-center">CATEGORIES</span>
            <ul className="mb-8 text-center">
               <li className="cursor-pointer inline-block w-2/4 mt-4">Life</li>
               <li className="cursor-pointer inline-block w-2/4 mt-4">Music</li>
               <li className="cursor-pointer inline-block w-2/4 mt-4">Style</li>
               <li className="cursor-pointer inline-block w-2/4 mt-4">Sport</li>
               <li className="cursor-pointer inline-block w-2/4 mt-4">Tech</li>
               <li className="cursor-pointer inline-block w-2/4 mt-4">Cinema</li>
            </ul>
         </div>

         <div className="w-5/6 flex flex-col items-center mt-4">
            <span className="m-2 p-1 w-4/5 border-t-2 border-b-2 border-gray-200 font-varela-round text-lg font-normal text-center">FOLLOW US</span>
            <div className="mt-5 space-x-5">
               <i className="topIcon fab fa-facebook-square text-3xl text-gray-600 cursor-pointer"></i>
               <i className="topIcon fab fa-twitter-square text-3xl  text-gray-600 cursor-pointer"></i>
               <i className="topIcon fab fa-pinterest-square text-3xl text-gray-600 cursor-pointer"></i>
               <i className="topIcon fab fa-instagram-square text-3xl text-gray-600 cursor-pointer"></i>
            </div>
         </div>
      </div>
   )
}

export default Sidebar
