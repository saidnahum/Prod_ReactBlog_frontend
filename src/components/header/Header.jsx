import './header.css';

const Header = () => {
   return (
      <div className="header mt-14">
         <div className="headerTitles flex flex-col items-center font-lora text-gray-700">
            <span className="absolute text-xl">React & Node</span>
            <span className="absolute mt-10 text-8xl">Blog</span>
         </div>
         <img
            className="headerImage w-full h-450 mt-20 object-cover"
            src="https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80" 
            alt="" 
         />
      </div>
   )
}

export default Header;
