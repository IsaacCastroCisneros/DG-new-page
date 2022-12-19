import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

export default function PopUp(props) 
{
  const
  {
    popUp,
    show,
    setShow,
    overflow=false,
    closeButton=true
  }=props

  useEffect(()=>
  {
    const body= document.querySelector('body')

    if(show&&!overflow)
    {
      
      body?.setAttribute('style','overflow:hidden');
      return
    }

    body?.setAttribute('style','overflow:auto');
  })

   return (
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
         className={`fixed h-[calc(100vh)] w-[100vw] flex justify-center items-center previewMob:items-start previewMob:pt-[4rem] previewMob:pb-[2rem] z-[99999999999] top-0 left-0 ${
           show ? "pointer-events-auto" : "pointer-events-none"
         } ${show ? "overflow-y-auto" : ""}`}
       >
         <div
           className="flex gap-[1rem] relative transition-all duration-[200ms] mob:w-[90%] mob:gap-[.5rem] justify-center items-center mob2:flex-col"
           style={{
             opacity: `${show ? "1" : "0"}`,
             transform: `translateY(${show ? "0" : "5rem"})`,
           }}
         >
           {popUp}
           {closeButton && (
             <button
               className="text-[#fff] border-[2px] border-[#fff] bg-[#000] w-[3rem] h-[3rem] flex justify-center items-center rounded-[100%] absolute text-[1.5rem] right-[-.5rem] top-[-.5rem]"
               onClick={() => setShow(false)}
             >
               {<FontAwesomeIcon icon={faXmark} />}
             </button>
           )}
         </div>
       </div>
     </>
   );
}
