import React from 'react'
import { IoMdNotifications } from "react-icons/io";
import { LiaUserCircleSolid } from "react-icons/lia";
import Logo from '../../assets/logo.png'
import Image from 'next/image';

const Header = () => {
  return (
    <header className='bg-base'>
      <div className='flex items-center justify-between px-5 py-5 md:px-20'>
        {/* Logo Section */}
        <Image src={Logo}
          alt='LFL Cup Logo'
          width={50}
          height={50}
        />
        
        {/* Navigation Menu */}
          <ul className='flex space-x-12 text-sm font-light'>
              <li className='underline'> ACCUEIL</li>
              <li>CONTACT</li>
          </ul>
    </div>
    </header>
  
  )
}



export default Header