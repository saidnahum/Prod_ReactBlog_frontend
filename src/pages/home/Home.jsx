import Header from '../../components/header/Header';
import Posts from '../../posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.css';

const Home = () => {
   return (
      <>
         <Header />

         <div className="grid grid-cols-12">
            <Posts/>
            <Sidebar/>
         </div>
      </>
      
   )
}

export default Home
