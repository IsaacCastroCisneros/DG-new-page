import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { useContext } from 'react';
import {appContext} from '../../context/AppContext'

export default function NewPopUp() 
{
  const{showPopUp,setShowPopUp}=useContext(appContext)

  useEffect(()=>
  {
    if(showPopUp.show)
    {
      document.body.style.overflow='hidden'
      return
    }
    
    document.body.style.overflow='auto'

  },[showPopUp])

  let isCloseButton = true

/*   if(showPopUp.closeButton===false)
  {
    isCloseButton=false
  } */

   return (
     <>
       <div
         className={`bg-[#000] pointer-events-${
           showPopUp.show ? "auto" : "none"
         } top-[0] left-[0] z-[999999999999] fixed h-[100vh] w-[100vw] transition-opacity duration-[200ms]`}
         style={{
           opacity: `${showPopUp.show ? ".5" : "0"}`,
         }}
       ></div>
       <div
         className={`fixed h-[calc(100vh)] w-[100vw] flex justify-center items-center previewMob:items-start previewMob:pt-[4rem] previewMob:pb-[2rem] z-[99999999999] top-0 left-0 px-[1rem] ${
           showPopUp.show ? "pointer-events-auto" : "pointer-events-none"
         } ${showPopUp.show ? "overflow-y-auto" : ""}`}
       >
         <div
           className="flex gap-[1rem] relative transition-all duration-[200ms] mob:gap-[.5rem] justify-center items-center mob2:flex-col"
           style={{
             opacity: `${showPopUp.show ? "1" : "0"}`,
             transform: `translateY(${showPopUp.show ? "0" : "5rem"})`,
           }}
         >
           <div className="relative flex items-start">
             {showPopUp.popUp}
             {isCloseButton && (
               <button
                 className="text-[#fff] border-[2px] border-[#fff] bg-[#000] w-[3rem] h-[3rem] flex justify-center items-center rounded-[100%] absolute text-[1.5rem] right-[-.5rem] top-[-.5rem]"
                 onClick={() => {
                   /*  document.body.style.overflow='auto' */
                   setShowPopUp((prev) => {
                     return { ...prev, show: false };
                   });
                 }}
               >
                 {<FontAwesomeIcon icon={faXmark} />}
               </button>
             )}
           </div>
         </div>
       </div>
     </>
   );
}
