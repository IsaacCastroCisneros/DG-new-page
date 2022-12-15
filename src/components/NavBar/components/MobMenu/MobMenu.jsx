import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { appContext } from '../../../../context/AppContext';
import Cart from '../Cart/Cart';

export default function MobMenu() 
{
  const{showMobMenu,setShowMobMenu,cart,setCart}=useContext(appContext)

  const active = showMobMenu ? 'translate-x-[0]' : 'translate-x-[-100%]'

  return (
    <div
      className={`absolute transition-all duration-200 w-[355px] border-r-[1px] border-gray-300 py-[1rem] px-[1.2rem] bg-[#fff] h-[100%] top-0 left-0 z-[99999] ${active}`}
    >
      <button
        onClick={() => setShowMobMenu(false)}
        className="absolute text-[2rem] text-[#000] right-[1.2rem]"
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <Link className="w-[13rem] block" to={"/"}>
        <img src="/img/logo-DG-nuevo.webp" className="w-[100%]" alt="" />
      </Link>
      <ul className="flex flex-col mt-[1.3rem] gap-[1rem]">
        <MobMenuOption path={"/"} label={"Inicio"} />
        <MobMenuOption path={"/"} label={"Cursos"} />
        <MobMenuOption path={"/"} label={"Diplomas"} />
        <Cart mob={true}/>
      </ul>
    </div>
  );
}

function MobMenuOption({path,label}) 
{
  return (
    <li className="text-[#000] font-bold">
      <Link to={path}>{label}</Link>
    </li>
  );
}
  