import Image from 'next/image'
import React from 'react'
import Logo from '../../assets/logo.png'
// import { FaFacebook } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className='bg-base h32 flex justify-between m-6'>
      <Image src={Logo}
        alt='lfl-cup logo'
        width={50}
        height={50}
      />
      <div>
        <ul>
          <li></li>
        </ul>
      </div>
      <p className='text-sm font-light'>2026 LFL Cup. Tous droit reservers.</p>
    </div>
  )
}
