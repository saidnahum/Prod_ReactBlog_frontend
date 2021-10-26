import React from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
   return (
      <div className="calc-700vh-50 flex flex-col justify-center register-bg bg-cover">
         
         <form className="mt-10 flex flex-col items-center font-lora">
            <span className="text-6xl mb-5 ">Register</span>

            <label className="text-left mx-0 my-5">Username</label>
            <input className="p-3 rounded" type="text" placeholder="Enter your Email"/>

            <label className="text-left mx-0 my-5">Email</label>
            <input className="p-3 rounded" type="email" placeholder="Enter your Email"/>
            
            <label className="text-left mx-0 my-5">Password</label>
            <input className="rounded p-3" type="password" placeholder="Enter your Password"/>

            <button className="mt-5 px-20 py-2 bg-green-800 rounded-lg text-white">Register</button>
            <button className="absolute top-20 right-5 bg-red-400 text-white p-2 rounded-lg cursor-pointer"><Link to="/login">Login</Link></button>
         </form>
      </div>
   )
}

export default Register;
