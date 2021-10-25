import Sidebar from '../../components/sidebar/Sidebar';

const Settings = () => {
   return (
      <div className="grid grid-cols-12">
         <div className="col-span-9 p-5">
            <div className="flex items-center justify-between">
               <span className="text-4xl mb-5 text-red-300">Update Your Account</span>
               <span className="text-red-600 cursor-pointer">Delete Your Account</span>
            </div>
            <form className="flex flex-col">
               <label className="">Profile Picture</label>
               <div className="flex items-center ">
                  <img className="topImg w-20 mt-5 h-20 rounded-xl object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1976&q=80" alt="" />
                  <label htmlFor="fileInput">
                  <i className="far fa-user-circle mt-5 ml-5 text-3xl text-white bg-red-300 rounded-full flex items-center justify-center w-8 h-8 cursor-pointer"></i>
               </label>
               </div>
               
               <input type="file" id="fileInput" style={{ display: "none" }}/>

               <label className="text-2xl mt-5">Username</label>
               <input className="p-3 border-b border-gray-200 focus:outline-none" type="text" placeholder="Write Your Username"/>
               
               <label className="text-2xl mt-5">Email</label>
               <input className="p-3 border-b border-gray-200 focus:outline-none" type="email" placeholder="Write Your Email"/>

               <label className="text-2xl mt-5">Password</label>
               <input className="p-3 border-b border-gray-200 focus:outline-none" type="password" placeholder="Write Your Password"/>

               <button className="self-center mt-10 rounded-lg text-white bg-green-500 px-10 py-2 cursor-pointer">Update</button>
            </form>
         </div>
         <Sidebar />
      </div>
   )
}

export default Settings
