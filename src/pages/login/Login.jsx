import React from 'react'
import { Link } from 'react-router-dom'

const login = () => {
   return (
      <div className="calc-700vh-50 flex flex-col justify-center login-bg bg-cover">
         
         <form className="mt-10 flex flex-col items-center font-lora">
            <span className="text-6xl mb-5 ">Login</span>
            <label className="text-left mx-0 my-5">Email</label>
            <input className="p-3 rounded" type="text" placeholder="Enter your Email"/>
            
            <label className="text-left mx-0 my-5">Password</label>
            <input className="rounded p-3" type="password" placeholder="Enter your Password"/>

            <button className="mt-5 px-20 py-2 bg-red-400 rounded-lg text-white">Login</button>
            <button className="absolute top-20 right-5 bg-green-800 text-white p-2 rounded-lg cursor-pointer"><Link to="/register">Register</Link></button>
         </form>
      </div>
   )
}

export default login
