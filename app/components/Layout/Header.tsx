'use client';

import React from 'react'
import Logo from '../../assets/logo.png'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {

  const currentPath = usePathname();

  const links = [
    {label: 'ACCUEIL', href: '/'},
    {label: 'CONTACT', href: '/contact'}
  ]
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
            {links.map(link => (
              <Link 
              key={link.href}
              className={`${link.href === currentPath ? 'underline': 'none'}`}
              href={link.href}>{link.label}</Link>
            ))}
          </ul>
    </div>
    </header>
  
  )
}



export default Header