import React from 'react'

const login = () => {
   return (
      <div className="calc-700vh-50 flex flex-col justify-center linear-gradient bg-cover">
         
         <form className="mt-10 flex flex-col items-center">
            <span className="text-6xl">Login</span>
            <label className="text-left mx-0 my-5">Email</label>
            <input className=" p-3" type="text" placeholder="Enter your Email"/>
            
            <label className="text-left mx-0 my-5">Password</label>
            <input className=" p-3" type="password" placeholder="Enter your Password"/>

            <button className="mt-5 px-28 py-2 bg-red-400 rounded-lg text-white">Login</button>
            <button>Register</button>
         </form>
      </div>
   )
}

export default login
