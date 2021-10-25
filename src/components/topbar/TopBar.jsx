import './topbar.css';

const TopBar = () => {
   return (
      <div className="top w-full h-12 bg-white sticky top-0 grid grid-cols-3 items-center font-josefin font-light z-50">
         <div className="topLeft flex items-center justify-center space-x-2">
            <i className="topIcon fab fa-facebook-square text-3xl text-gray-600 cursor-pointer"></i>
            <i className="topIcon fab fa-twitter-square text-3xl  text-gray-600 cursor-pointer"></i>
            <i className="topIcon fab fa-pinterest-square text-3xl text-gray-600 cursor-pointer"></i>
            <i className="topIcon fab fa-instagram-square text-3xl text-gray-600 cursor-pointer"></i>
         </div>

         <div className="topCenter">
            <ul className="topList flex items-center space-x-10 cursor-pointer text-xl">
               <li className="topListItem">HOME</li>
               <li className="topListItem">ABOUT</li>
               <li className="topListItem">CONTACT</li>
               <li className="topListItem">WRITE</li>
               <li className="topListItem">LOGOUT</li>
            </ul>
         </div>

         <div className="topRight flex items-center justify-center">
            <img className="topImg w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1976&q=80" alt="" />
            <i className="topSearchIcon fas fa-search text-gray-500 ml-3 text-lg cursor-pointer"></i>
         </div>
      </div>
   )
}

export default TopBar
