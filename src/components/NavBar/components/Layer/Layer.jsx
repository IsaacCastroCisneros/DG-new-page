import React from 'react'
import { useContext } from 'react'
import { appContext } from '../../../../context/AppContext'

export default function Layer() 
{
  const{showMobMenu,setShowMobMenu}=useContext(appContext)

  const active = showMobMenu ? {opacity:'.5',pointerEvents:'auto'}:{}

  return (
    <div className='fixed z-[999] left-0 top-0 pointer-events-none bg-black opacity-[0] w-[100vW] h-[100vh] transition-all duration-200'
     style={active}
     onClick={()=>setShowMobMenu(false)}
    ></div>
  )
}
