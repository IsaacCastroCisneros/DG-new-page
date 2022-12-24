import React,{useState} from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import PopUp from '../../../../../components/PopUp/PopUp';
import PriceLink from '../../../../../components/PriceLink/PriceLink';
import { productContext } from '../../../Product';
import Cuentas from './cuentas/Cuentas';

export default function FormasBox(props)
{
  const data =useContext(productContext)
  const[show,setShow]=useState(false)

  const
  {
     img,
     title,
     body,
     label='',
     path,
     linkLike,
     onClick=false
  }=props

   return (
    <>
     <PopUp show={show} setShow={setShow} popUp={<Cuentas/>} />
     <div className="relative rounded-[.7rem] flex-1 border-[2px] border-gray-300 flex flex-col justify-between px-[1.5rem] pb-[.8rem] pt-[3.4rem] text-center">
       <div className="w-[5rem] bg-[#fff] h-[5rem] absolute border-[4px] flex justify-center items-center border-myPurple rounded-[100%] top-0 left-[50%] translate-x-[-50%] translate-y-[-50%]">
         <img src={img} className="w-[60%]" alt="" />
       </div>
       <h3 className="text-[16px] block">{title}</h3>
       {body}
       {linkLike &&!onClick&& (
         <PriceLink
           type={"cart"}
           productData={data}
           isLinkLike={true}
           conTarjeta={true}
         />
       )}
       {!linkLike &&!onClick&& (
         <Link
           to={path}
           className="text-[#0088e3] font-bold mt-[1rem] hover:underline"
         >
           {label}
         </Link>
       )}
       {
         onClick&&
         <button
           className="text-[#0088e3] font-bold mt-[1rem] hover:underline"
           onClick={()=>setShow(true)}
         >
           {label}
         </button>
       }
     </div>
    </>
   );
}
