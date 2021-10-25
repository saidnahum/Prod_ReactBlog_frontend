import React from 'react'

const Write = () => {
   return (
      <div className="pt-14 relative">
         <img 
            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" 
            className="ml-36 w-70vw h-64 object-cover object-right rounded-lg"
         />
         <form className="mt-10">
            <div className="ml-36 flex items-center">
               <label htmlFor="fileInput">
                  <i className="fas fa-plus w-7 h-7 rounded-full border border-gray-600 flex items-center justify-center text-xl text-gray-400 cursor-pointer"></i>
               </label>
               <input type="file" id="fileInput" style={{ display: "none" }} />
               <input type="text" placeholder="Title" className="ml-4 text-3xl focus:outline-none placeholder-gray-600" autoFocus={true}/>
            </div>
            <div className="ml-36 flex items-center">
               <textarea 
                  placeholder="Tell your story . . ."
                  type="text"
                  className=" border-none text-2xl p-5 focus:outline-none w-4/5 placeholder-gray-600 mt-5"
               ></textarea>
               <button className=" bg-green-600 text-white cursor-pointer p-2 rounded-lg ml-10">Publish</button>
            </div>
            
         </form>
      </div>
   )
}

export default Write
