import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle,faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { appContext } from '../../context/AppContext'

const styles = 'fixed z-[999] text-[3rem] font-bold right-[2rem] transition-all duration-200 pointer-events-none text-[#fff] flex gap-[1rem] items-center px-[1rem] py-[.8rem] rounded-[.5rem] phone:text-[1.5rem] top-[5rem] phone:top-[1rem] phone:right-[1rem]'

export default function Notification() 
{
  const{showNoti,setShowNoti}=useContext(appContext)

  let hide= {transform:'scale(0)',pointerEvents:'auto'}
  let showingOk=undefined
  let showingSame= undefined
  
  if(showNoti.status==='ok'&&showNoti.show)
  {
     showingOk = {transform:'scale(1)',pointerEvents:'auto'}
  }
  if(showNoti.status==='same'&&showNoti.show)
  {
     showingSame ={transform:'scale(1)',pointerEvents:'auto'}
  }

  if(showNoti)
  {
    setTimeout(()=>
    {
      setShowNoti(false)
    },1000)
  }

  return (
    <>
      <div
        className={`${styles} bg-green-500`} 
        style={showingOk||hide}
      >
        <FontAwesomeIcon icon={faCheckCircle} />
        Producto añadido
      </div>
      <div
        className={`${styles} bg-yellow-500`}
        style={showingSame||hide}
      >
        <FontAwesomeIcon icon={faCircleExclamation} />
        Ya en el carro
      </div>
    </>
  );
}
