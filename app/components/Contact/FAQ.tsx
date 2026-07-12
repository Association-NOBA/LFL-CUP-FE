import React from 'react'

const questions = [
    { question: 'Billeterie: Comment acheter des places ?', 
      answer: 'Les billets sont disponibles en ligne via notre plateforme officielle TicketCG & BissoEvent et dans les points de vente agréés et dans les villes hôtes.'},
      {
        question: 'Sécurité : Quelles sont les mesures en place ?',
        answer: "Un dispositif complet de sécurité est déployé dans chaque stade, incluant des contrôles d'accès rigoureux et une présence médicale permanente."
      },
      {
        question: 'Restauration : Y aura-t-il à manger sur place ?',
        answer: "Des zones de restauration seront disponibles à l'intérieur de chaque stade proposant des boissons et des repas légers tout au long de la journée."
      },
      {
        question: "Programme : Où consulter le calendrier ?",
        answer: "Le calendrier complet des matchs et le programme des festivités sont consultables dans la section 'Programme' de notre site web."
      }
]

const FAQ = () => {
  return (
    <div className='bg-base py-1 px-6'>
      <h2 className='font-heading text-3xl md:text-5xl text-center md:text-left md:ml-20'>FAQ de l'Événement</h2>
      <div className='max-w-4xl mx-auto space-y-6 mt-10'>
        {questions.map((q,idx) => (
            <div key={idx} className='border-b border-gray-300 pb-6' >
                <h3 className='font-heading text-lg md:text-xl'>{q.question}</h3>
                <p className='mt-2 text-gray-700 leading-7'>{q.answer}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ
