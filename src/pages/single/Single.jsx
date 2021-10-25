import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import SinglePost from '../../components/singlePost/SinglePost'

const Single = () => {
   return (
      <div className="single grid grid-cols-12">
         <SinglePost/>
         <Sidebar/>
      </div>
   )
}

export default Single
