import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { appContext } from '../../../../context/AppContext';

export default function MobMenu() 
{
  const{showMobMenu}=useContext(appContext)

  const active = showMobMenu ? 'translate-x-[0]' : 'translate-x-[-100%]'

  return (
    <div className={`absolute transition-all duration-200 min-w-[375px] border-r-[1px] border-gray-300 py-[1rem] px-[2rem] bg-[#fff] h-[100%] top-0 left-0 z-[99999] ${active}`}>
      <ul className="flex flex-col">
        <li className='text-[#000]'>
          <Link to={'/'}>Inicio</Link>
        </li>
      </ul>
    </div>
  );
}
