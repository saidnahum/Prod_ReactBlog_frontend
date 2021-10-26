import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router';

const Home = () => {

   const [posts, setPosts] = useState([]);
   const {search} = useLocation()
   console.log(search);

   useEffect(() => {
      const fetchPosts = async () => {
         const res = await axios.get("http://localhost:5000/api/posts"+search);
         // const res = await axios.get("http://localhost:1337/posts"+search);
         // console.log(res.data);
         setPosts(res.data);
      }

      fetchPosts();
   }, [search]);

   return (
      <>
         <Header />

         <div className="grid grid-cols-12">
            <Posts posts={posts}/>
            <Sidebar/>
         </div>
      </>
      
   )
}

export default Home
