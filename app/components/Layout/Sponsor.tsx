import Image from 'next/image'
import React from 'react'
import BissoEventLogo from "../../assets/logo-be.png"
import TicketCgLogo from "../../assets/ticketcg.jpg"

export default function Sponsor() {
  return (
    <div className='bg-gris h-96'>
         <h1 className=' text-black p-8 text-5xl font-heading text-center'>NOS PARTENAIRES & SPONSORS</h1>
         <div className='flex flex-wrap justify-center items-center gap-6 md:gap-10 mt-10 px-6'>
          <Image 
          src={BissoEventLogo}
          alt='Bisso Event Logo'
          width={150}
          height={150}
          />
          <Image 
          src={TicketCgLogo}
          alt="Ticket Cg Logo"
          height={150}
          width={150}
          />
         </div>
    </div>
  )
}
