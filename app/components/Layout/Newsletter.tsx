import React from 'react'

export default function Newsletter() {
  return (
    <div className='bg-yel min-h-[400px] py-12 px-6'>
      <div className='max-w-3xl'>
        <h2 className='text-white p-8 text-5xl font-heading'>Restez Connectés</h2>
        <p className='text-white leading-relaxed'>{"Abonnez-vous à notre newsletter pour ne rien manquer de l'actualité de la LFL Cup et recevoir les résultats en exclusivité."}</p>
      </div>

      <form className='flex flex-col md:flex-row gap-4 m-3'>
        <input 
        type='text'
        placeholder='Nom'
        className='border border-gray-300 px-4 py-2'
        />
         <input 
         type='text'
         placeholder='Telephone'
          className='border border-gray-300 px-4 py-2'
         />
         <input 
         type='text' 
         placeholder='Email'
           className='border border-gray-300 px-4 py-2'
         />
         <button className='bg-red px-6 py-2 font-heading hover:underline'>{"S'inscrire"}</button>
      </form>
    </div>
  )
}
