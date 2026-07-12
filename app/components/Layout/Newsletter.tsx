'use client'

import React from 'react'
import {useForm} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {z} from 'zod';
import { createNewsletterSchema } from '@/app/validationSchema/newsletterSchema';
import ErrorMessage from '../ErrorMessage';

type NewsletterForm = z.infer<typeof createNewsletterSchema>

export default function Newsletter() {

    const {register, handleSubmit, formState: {errors}} = useForm<NewsletterForm>({
      resolver: zodResolver(createNewsletterSchema)
    });

  return (
    <div className='bg-yel min-h-[400px] py-12 px-6'>
      <div className='max-w-3xl'>
        <h2 className='text-white p-8 text-5xl font-heading'>Restez Connectés</h2>
        <p className='text-white leading-relaxed'>{"Abonnez-vous à notre newsletter pour ne rien manquer de l'actualité de la LFL Cup et recevoir les résultats en exclusivité."}</p>
      </div>

      <form 
      onSubmit={handleSubmit((data) => console.log(data))}
      className='flex flex-col md:flex-row gap-4 m-3'>
        <input 
        type='text'
        placeholder='Nom'
        {...register('nom')}
        className='border border-gray-300 px-4 py-2'
        />
        <ErrorMessage>{errors.nom?.message}</ErrorMessage>
         <input 
         type='text'
         placeholder='Telephone'
         {...register('telephone')}
          className='border border-gray-300 px-4 py-2'
         />
         <ErrorMessage>{errors.telephone?.message}</ErrorMessage>
         <input 
         type='text' 
         placeholder='Email'
         {...register('email')}
           className='border border-gray-300 px-4 py-2'
         />
         <ErrorMessage>{errors.email?.message}</ErrorMessage>
         <button className='bg-red px-6 py-2 font-heading hover:underline'>{"S'inscrire"}</button>
      </form>
    </div>
  )
}
