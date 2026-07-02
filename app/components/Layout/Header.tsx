import React from 'react'
import { IoMdNotifications } from "react-icons/io";
import { LiaUserCircleSolid } from "react-icons/lia";

const Header = () => {
  return (
      <div className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
          <p>Logo</p>
          <p>LFL Cup</p>
          <p>Congo 2024</p>
          <ul>
              <li> <IoMdNotifications /></li>
              <li><LiaUserCircleSolid /></li>
          </ul>
         
          
    </div>
  )
}

export default Header