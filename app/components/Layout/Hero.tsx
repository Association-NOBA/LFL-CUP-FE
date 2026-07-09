import Image from 'next/image'
import React from 'react'
import hero_img from '../../assets/hero-image.jpg'

export default function Hero() {
  return (
      <div className='py-10 bg-base'>
          <div className='bg-base flex flex-col items-start gap-5 px-20 py-8'>
            <h1 className='text-6xl text-red font-heading'>LFL CUP</h1>
            <p className='text-sm font-light'>{"Dynamiser le football lycéen au Congo. Découvrez l'énergie et l'excellence de notre compétition phare pour les jeunes."}</p>
            <button className='bg-red text-white px-6 py-3 rounded-sm font-light'>Découvrez la competition</button>
          </div>
          <div className="px-4 md:px-8">
        <Image
          src={hero_img}
          alt='hero-image'
          className="w-full h-auto"
        />
        </div>
    </div>
  )
}
