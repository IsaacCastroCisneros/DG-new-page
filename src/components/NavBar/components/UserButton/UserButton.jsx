import React,{useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import UserMenu from './components/UserMenu/UserMenu'

export default function UserButton(props)
{
  const[show,setShow]=useState(false)
  const{avatar,nombre}=props

  useEffect(()=>
  {
    function removingMenu(e)
    {
       if(e.target.closest('.user-menu')===null)
       {
        setShow(false)
       }
    }
   
    window.addEventListener('click',removingMenu)

    return ()=> window.removeEventListener('click',removingMenu)
  })

  return (
    <div className='relative user-menu z-[999999]'>
      <button className="flex items-center gap-[.6rem] justify-between"
       onClick={()=>setShow(prev=> !prev)}
       >
        <div className="h-[2.2rem] rounded-[100%] overflow-hidden mobNav:hidden">
          <img src={avatar} className="h-[100%]" alt="" />
        </div>
        <p className="flex items-center gap-[.5rem]">
          <strong className="text-[#000]">Hola</strong>
          <strong className="text-blue-600 max-w-[5.5rem] whitespace-nowrap overflow-hidden text-ellipsis">
            {nombre}
          </strong>
          <FontAwesomeIcon icon={faChevronDown} />
        </p>
      </button>
      {
        show&&<UserMenu/>
      }
    </div>
  );
}
