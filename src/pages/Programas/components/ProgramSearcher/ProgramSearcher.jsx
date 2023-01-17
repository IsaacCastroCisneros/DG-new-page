import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

export default function ProgramSearcher({setSearch,value}) 
{
  return (
    <div className='bg-myGrey rounded-[5rem] max-w-[100%] w-[35rem] px-[1.2rem] py-[.7rem] flex items-center'>
        <input type="text"
         className='w-[100%] bg-[transparent] outline-none'
         placeholder='Buscar'
         onChange={(e)=>setSearch(e.target.value)}
         value={value}
         />
         <FontAwesomeIcon icon={faMagnifyingGlass}/>
    </div>
  )
}
