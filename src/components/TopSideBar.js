import React from 'react'
import { Link } from "react-router-dom";
const TopSideBar = () => {
  return (
    <div className="bg-[#121212] text-gray-600 m-2 rounded-xl py-10">
      <ul className="p-4 text-xl" >
        <Link to="/"><li className="hover:text-white ">🏠 Home</li></Link>
        <Link to="/search"><li className="hover:text-white">🔎 Search</li></Link>
        
    </ul>
    </div>
  )
}

export default TopSideBar