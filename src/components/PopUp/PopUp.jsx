import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

export default function PopUp({popUp,show,setShow}) 
{

   return (
     <>
       {
         <>
           <div
             className={`bg-[#000] pointer-events-${
               show ? "auto" : "none"
             } top-[0] left-[0] z-[999999999999] fixed h-[100vh] w-[100vw] transition-opacity duration-[200ms]`}
             style={{
               opacity: `${show ? ".5" : "0"}`,
             }}
           ></div>

           <div
             className={`fixed h-[100vh] w-[100vw] flex justify-center items-center mob2:items-start mob2:pt-[4rem] mob2:pb-[2rem] z-[99999999999] top-0 left-0 ${
               show ? "pointer-events-auto" : "pointer-events-none"
             } ${show?'overflow-y-auto':''}`}
           >
             <div className='flex gap-[1rem] bg-[#fff] relative transition-all duration-[200ms] mob:w-[90%] mob:gap-[.5rem] justify-center items-center mob2:flex-col'
               style={{
                opacity: `${show ? "1" : "0"}`,
                transform: `translateY(${show ? "0" : "5rem"})`,
              }}
              >
                {
                  popUp
                }
               <button className='text-[#fff] border-[2px] border-[#fff] bg-[#000] w-[3rem] h-[3rem] flex justify-center items-center rounded-[100%] absolute text-[1.5rem] right-[-.5rem] top-[-.5rem]'
                onClick={()=>setShow(false)}
                >
                  {<FontAwesomeIcon icon={faXmark}/>}
               </button>
             </div>
           </div>
         </>
       }
     </>
   );
}
