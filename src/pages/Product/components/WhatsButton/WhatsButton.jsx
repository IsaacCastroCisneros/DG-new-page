import React from 'react'
import titleShorter from '../../../../helpers/titleShorter'

export default function WhatsButton({titulo,asesores}) 
{
  const msg ='Hola solicito informacion del programa:'

  return (
    <a className='whatBtn fixed bottom-[1rem] left-[1rem] z-[9999] w-[3.5rem] elige:bottom-[.5rem] elige:left-[.5rem]' 
     href={`https://api.whatsapp.com/send?phone=51${asesores ? asesores[0]?.telefono:''}&text=${msg} ${titulo}`}
     target={"_blank"}
     >
       <span className='whatAnimation absolute w-[1.5rem] top-[-.5rem] h-[1.5rem] flex justify-center items-center bg-red-500 text-[#fff] rounded-[100%] z-[999]'>
           <p>
              1
           </p>
       </span>
       <p className='transition-all duration-200 absolute top-0 left-[.5rem] text-myBlack text-[.8rem] translate-y-[-100%] min-w-[12rem] max-w-[12.5rem] bg-[#fff] border-[1px] border-gray-400 p-[.6rem] rounded-[.3rem] shadow-xl elige:text-[.7rem] elige:min-w-[10rem]'>
         {msg}<br/><strong className='elige:max-w-[10rem] block elige:whitespace-nowrap elige:overflow-hidden elige:text-ellipsis'>{titleShorter(titulo)}</strong>
       </p>
       <img src="/img/what.webp" className='w-[100%]'/>
    </a>
  )
}
