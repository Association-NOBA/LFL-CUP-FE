import React from 'react'

export default function Inscription() {
  return (
    <div className='bg-bleu min-h-[450px] py-8 px-6'>
         <h1 className=' text-black p-8 text-5xl font-heading text-center mb-10'>{"REJOIGNEZ L'AVENTURE"}</h1>

         <div className='flex flex-col md:flex-row justify-center gap-6'>

            <div className='bg-gris p-10 flex flex-col gap-6 max-w-xl'>
                <h2 className='text-white font-heading'>{"INSCRIPTION D'EQUIPE"}</h2>
                <p className='text-white leading-relaxed'>{"Inscrivez votre lycée pour participer à la compétition de football la plus prestigieuse du Congo. Préparez vos talents à briller sur la scène nationale."}</p>
                <button className='bg-yel rounded-sm px-6 py-2 font-heading hover:underline w-fit'>{"INSCRIS TON LYCEE"}</button>
            </div>

            <div className='bg-gris p-10 flex flex-col gap-6 max-w-xl'>
                <h2 className='text-white font-heading'>{"DEVENEZ BÉNÉVOLE"}</h2>
                <p className='text-white leading-relaxed'>{"Participez à l’organisation de la LFL Cup. Que vous soyez passionné d'événementiel ou de sport, rejoignez notre équipe dynamique sur le terrain."}</p>
                <button className='bg-yel rounded-sm px-6 py-2 font-heading hover:underline w-fit'>DEVENIR VOLONTAIRE</button>
            </div>
         </div>
    </div>
  )
}
