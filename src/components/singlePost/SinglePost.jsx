import React from 'react'


const SinglePost = () => {
   return (
      <div className="col-span-9">
         <div className="p-5 pr-0">
            <img
               className="w-full h-80 object-cover rounded-lg"
               src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" 
               alt="" 
            />
            <h1 className="text-center m-3 font-lora text-4xl font-bold mt-10">
               Lorem ipsum dolor sit amet.
               <div className="float-right text-lg">
                  <i className="ml-3 cursor-pointer far fa-edit text-green-700"></i>
                  <i className="ml-3 cursor-pointer far fa-trash-alt text-red-700"></i>
               </div>
            </h1>
            <div className="mb-5 flex justify-between gold font-varela-round text-lg">
               <span>Author: <b>Said</b></span>
               <span>Date: <b>1 hour ago</b></span>
            </div>
            <p className="text-gray-500 text-lg leading-7"><span className="ml-5 text-3xl font-bold">L</span>orem ipsum dolor sit amet consectetur, adipisicing elit. Quas mollitia culpa eius excepturi quos ab ullam est reiciendis a. Laboriosam tempore quam ea doloremque neque! Dolorem debitis commodi esse iste.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas mollitia culpa eius excepturi quos ab ullam est reiciendis a. Laboriosam tempore quam ea doloremque neque! Dolorem debitis commodi esse iste.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas mollitia culpa eius excepturi quos ab ullam est reiciendis a. Laboriosam tempore quam ea doloremque neque! Dolorem debitis commodi esse iste.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas mollitia culpa eius excepturi quos ab ullam est reiciendis a. Laboriosam tempore quam ea doloremque neque! Dolorem debitis commodi esse iste.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas mollitia culpa eius excepturi quos ab ullam est reiciendis a. Laboriosam tempore quam ea doloremque neque! Dolorem debitis commodi esse iste.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas mollitia culpa eius excepturi quos ab ullam est reiciendis a. Laboriosam tempore quam ea doloremque neque! Dolorem debitis commodi esse iste.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas mollitia culpa eius excepturi quos ab ullam est reiciendis a. Laboriosam tempore quam ea doloremque neque! Dolorem debitis commodi esse iste.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas mollitia culpa eius excepturi quos ab ullam est reiciendis a. Laboriosam tempore quam ea doloremque neque! Dolorem debitis commodi esse iste.
            </p>
         </div>
      </div>
   )
}

export default SinglePost
