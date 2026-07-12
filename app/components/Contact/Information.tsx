import React from 'react'

const Information = () => {
  return (
    <div className='bg-base py-16 px-6'>
      <h2 className='text-3xl md:text-5xl text-center font-heading'>Prenez en Contact</h2>
      <p className='text-center max-w-2xl mx-auto mt-6'>Étudiant, établissement scolaire ou partenaire, rejoignez-nous pour construire ensemble l'avenir du football au Congo.</p>
      <form className='max-w-xl mx-auto mt-10 flex flex-col gap-5'>
        <input 
            type='text'
            placeholder='Nom complet*'
            className='border border-gray px-4 py-2'
        />
        <input 
        type='text'
         placeholder='Addresse e-mail*'
          className='border border-gray px-4 py-2'
        />
        <input 
        type='text'
         placeholder='École / Établissement'
          className='border border-gray px-4 py-2'
        />
        <textarea 
         placeholder='Message'
          className='border border-gray px-4 py-3 w-full rounded'
        />
        <button className='bg-red px-8 py-3 rounded hover:opacity-90 transition'>Envoyer le message</button>
      </form>
      <div className='bg-black border m-10 '></div>
    </div>
  )
}

export default Information
