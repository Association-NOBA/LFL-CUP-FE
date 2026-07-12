'use client'

import React from 'react'
import {useForm} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createContactSchema } from '@/app/validationSchema/contactSchema';
import {z} from 'zod';
import ErrorMessage from '../ErrorMessage';

type ContactForm = z.infer<typeof createContactSchema>;

const Information = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<ContactForm>({
        resolver: zodResolver(createContactSchema)
    });

  return (
    <div className='bg-base py-16 px-6'>
      <h2 className='text-3xl md:text-5xl text-center font-heading'>Prenez en Contact</h2>
      <p className='text-center max-w-2xl mx-auto mt-6'>Étudiant, établissement scolaire ou partenaire, rejoignez-nous pour construire ensemble l'avenir du football au Congo.</p>
      <form 
      onSubmit={handleSubmit((data) => console.log(data))}
      className='max-w-xl mx-auto mt-10 flex flex-col gap-5'>
        <input 
            type='text'
            {...register('nom')}
            placeholder='Nom complet*'
            className='border border-gray px-4 py-2'
        />
        <ErrorMessage>{errors.nom?.message}</ErrorMessage>
        <input 
        type='text'
         placeholder='Addresse e-mail*'
         {...register('email')}
          className='border border-gray px-4 py-2'
        />
         <ErrorMessage>{errors.email?.message}</ErrorMessage>
        <input 
        type='text'
         placeholder='École / Établissement'
         {...register('school')}
          className='border border-gray px-4 py-2'
        />
         <ErrorMessage>{errors.school?.message}</ErrorMessage>
        <textarea 
         placeholder='Message'
         {...register('message')}
          className='border border-gray px-4 py-3 w-full rounded'
        />
         <ErrorMessage>{errors.message?.message}</ErrorMessage>
        <button className='bg-red px-8 py-3 rounded hover:opacity-90 transition'>Envoyer le message</button>
      </form>
      <div className='bg-black border m-10 '></div>
    </div>
  )
}

export default Information
