import React from 'react'
import { IoMdNotifications } from "react-icons/io";
import { LiaUserCircleSolid } from "react-icons/lia";

const Header = () => {
  return (
    <header className='bg-base'>
      <div className='flex items-center justify-between px-20 py-5'>
        {/* Logo Section */}
        <p>Logo</p>
        
        {/* Navigation Menu */}
          <ul className='flex space-x-12'>
              <li> ACCUEIL</li>
              <li>CONTACT</li>
          </ul>
    </div>
    </header>
  
  )
}



export default Header