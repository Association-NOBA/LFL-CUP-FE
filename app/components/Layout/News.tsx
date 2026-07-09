import React from 'react'

export default function News() {
  return (
      <div className='bg-vert h-96'>
          <h1 className=' text-white p-8 text-5xl font-heading mt-6'>Actualités</h1>
          <div className='flex justify-between px-5 text-white'>
              <span className='text-sm font-light'>15 OCT 2026</span>
              <p className='font-heading'>INSCRIPTION</p>
              <button className='text-sm font-light bg-red px-6 py-2 rounded-sm'>{"Lire L'anonce"}</button>
          </div>
    </div>
  )
}
