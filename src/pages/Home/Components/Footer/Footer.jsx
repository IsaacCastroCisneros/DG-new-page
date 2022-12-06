import React from 'react'

export default function Footer() 
{
  return (
    <footer className='flex justify-center'>
        <p className='text-gray-400 py-[3rem] phone:hidden'>
          Copyright © 2011-2022 CENTRO DE CAPACITAIÓN Y DESARROLLO GLOBAL
        </p>
        <p className='text-gray-400 py-[3rem] flex-col hidden phone:flex items-center text-center'>
          <span>Copyright © 2011-2022</span>
          <span>CENTRO DE CAPACITAIÓN Y DESARROLLO GLOBAL</span>
        </p>
    </footer>
  )
}
