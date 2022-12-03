import React from 'react'
import Results from './components/Results/Results'

export default function EligeElPrograma() 
{
  return (
    <section className='custom-container2 text-[#464646] pb-[7rem]'>
       <h1 className='capitalize block text-center text-[2.5rem] mt-[4.5rem]'>
          elige el programa de tu interés y certificate
       </h1>
       <p className='capitalize block text-center text-[1.5rem] mt-[1rem] mb-[3rem]'>
          todos los programas son virtuales
       </p>
       <Results/>
    </section>
  )
}
