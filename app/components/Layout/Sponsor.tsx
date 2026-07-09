import Image from 'next/image'
import React from 'react'
import BissoEventLogo from "../../assets/logo-be.png"

export default function Sponsor() {
  return (
    <div className='bg-gris h-96'>
         <h1 className=' text-black p-8 text-5xl font-heading text-center'>NOS PARTENAIRES & SPONSORS</h1>
         <div className='flex gap-6 m-8'>
          <Image 
          src={BissoEventLogo}
          alt='Bisso Event Logo'
          width={150}
          height={150}
          />
         </div>
    </div>
  )
}
