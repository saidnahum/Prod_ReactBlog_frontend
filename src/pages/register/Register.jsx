import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Register = () => {

   const [username, setUsername] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('')
   const [error, setError] = useState(false);

   const handleSubmit = async (e) => {
      e.preventDefault();
      setError(false);
      try {
         const res = await axios.post("http://localhost:5000/api/auth/register", {
            username,
            email,
            password
         });
         res.data && window.location.replace("/login");
      } catch (error) {
         setError(true);
      }

   };

   return (
      <div className="calc-700vh-50 flex flex-col justify-center register-bg bg-cover">
         
         <form className="mt-10 flex flex-col items-center font-lora" onSubmit={handleSubmit}>
            <span className="text-6xl mb-5 ">Register</span>

            <label className="text-left mx-0 my-5">Username</label>
            <input 
               className="p-3 rounded" 
               type="text" 
               placeholder="Enter your Username"
               onChange={e => setUsername(e.target.value)}
            />

            <label className="text-left mx-0 my-5">Email</label>
            <input 
               className="p-3 rounded" 
               type="email" 
               placeholder="Enter your Email"
               onChange={e => setEmail(e.target.value)}
            />
            
            <label className="text-left mx-0 my-5">Password</label>
            <input 
               className="rounded p-3" 
               type="password" 
               placeholder="Enter your Password"
               onChange={e => setPassword(e.target.value)}
            />

            <button className="mt-5 px-20 py-2 bg-green-800 rounded-lg text-white" type="submit">Register</button>
            {error && <span className="mt-5 text-red-500">Something went wrong</span>}
            <button className="absolute top-20 right-5 bg-red-400 text-white p-2 rounded-lg cursor-pointer"><Link to="/login">Login</Link></button>
         </form>
      </div>
   )
}

export default Register;
