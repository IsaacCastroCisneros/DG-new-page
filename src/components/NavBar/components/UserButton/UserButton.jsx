import React,{useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import UserMenu from './components/UserMenu/UserMenu'
import { useContext } from 'react'
import { navBarContext } from '../../Navbar'

export default function UserButton(props)
{
  const[show,setShow]=useState(false)
  const{hideNavBar}=useContext(navBarContext)
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

  useEffect(()=>
  {
    if(hideNavBar!==undefined)
    {
      if(hideNavBar.isHide===true)
      {
        setShow(false)
      }
    }
  })

  return (
    <div className={`relative user-menu z-[999999]`}>
      <button className={`flex items-center gap-[.6rem] justify-between ${show ? 'bg-gray-100':'bg-gray-50'} px-[.8rem] border-[2px] py-[.5rem] border-gray-200 rounded-[.5rem]  hover:bg-gray-100`}
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
          <FontAwesomeIcon className={`transition-all duration-200`} icon={faChevronDown} 
            style={{transform:show? 'rotate(180deg)':'rotate(0deg)'}}
           />
        </p>
      </button>
      <UserMenu show={show}/>
    </div>
  );
}
