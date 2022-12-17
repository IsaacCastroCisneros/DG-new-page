import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faXmarkCircle,faCheckCircle } from '@fortawesome/free-regular-svg-icons';

export default function StatusMsg({setShow,status})
{
  
  return (
    <div className='bg-[#fff] flex flex-col items-center w-[30rem] p-[1.8rem] rounded-[.5rem]'>
      {
        status==='success'&&
        <Success setShow={setShow}/>
      }
      {
        status==='failed'&&
        <Failed setShow={setShow}/>
      }
    </div>
  );
}

function Success({setShow})
{
  return (
    <>
      <span className='text-[10rem] text-green-400'>
        <FontAwesomeIcon icon={faCheckCircle} />
      </span>
      <p className=' text-gray-600 font-bold text-[1.3rem] text-center mb-[1rem]'>
        Se han enviado los datos con exito!!
      </p>
      <button className='bg-green-500 px-[1rem] py-[.5rem] text-[#fff] uppercase font-bold rounded-[.5rem]' 
       onClick={() => setShow({show:false,status:'success'})}>
         aceptar
      </button>
    </>
  );
}

function Failed({setShow})
{
  return (
    <>
      <span className='text-[10rem] text-red-500'>
        <FontAwesomeIcon icon={faXmarkCircle} />
      </span>
      <p className=' text-gray-600 font-bold text-[1.3rem] text-center mb-[1rem]'>
        A ocurrido un error por favor valida los datos ingresados
      </p>
      <button className='bg-red-500 px-[1rem] py-[.5rem] text-[#fff] uppercase font-bold rounded-[.5rem]' 
       onClick={() => setShow({show:false,status:'failed'})}>
         OK
      </button>
    </>
  );
}