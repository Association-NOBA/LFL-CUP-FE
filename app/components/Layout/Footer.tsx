import Image from 'next/image'
import React from 'react'
import Logo from '../../assets/logo.png'
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className='bg-base h-32 flex flex-col md:flex-row items-center justify-between gap-6 px-6 py-6'>
      <Image src={Logo}
        alt='lfl-cup logo'
        width={50}
        height={50}
      />
      <div>
        <ul className='flex justify-between gap-6 py-6'>
          <li><FaFacebook /></li>
          <li><FaInstagram /></li>
          <li><FaTiktok /></li>
          <li><FaYoutube /></li>
        </ul>
      </div>
      <p className='text-sm font-light'> © 2026 LFL Cup. Tous droits réservés.</p>
    </div>
  )
}
