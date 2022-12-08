import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcMastercard,faCcVisa,faCcAmex,faCcDinersClub } from '@fortawesome/free-brands-svg-icons';
import React from 'react'
import { Link } from 'react-router-dom';

export default function Formas() 
{
  return (
    <div>
      <h1 className="text-[26px]">
        Formas de Pago Disponibles
        <span className="border-b-[3px] border-myPurple block w-[20%] mt-[.8rem]"></span>
      </h1>
      <div className="flex gap-[1rem] items-stretch">
        <FormasBox
          img={"/img/icons/hands.png"}
          title={"Pago en Efectivo"}
          body={
            <p className="text-[13px] mt-[1rem]">
              Los pagos en efectivo solo Av. Julio C Tello 741 Lince
            </p>
          }
        />
        <FormasBox
          img={"/img/icons/card.png"}
          title={"Tarjeta Crédito/Débito"}
          body={
            <div className="flex gap-[.5rem] w-[100%] justify-between text-[2rem] mt-[.5rem]">
              <FontAwesomeIcon icon={faCcVisa} />
              <FontAwesomeIcon icon={faCcMastercard} />
              <FontAwesomeIcon icon={faCcAmex} />
              <FontAwesomeIcon icon={faCcDinersClub} />
            </div>
          }
          label={"Pagar con Tarjeta"}
          path={"/"}
        />
        <FormasBox
          img={"/img/icons/pc.png"}
          title={"Depósito Online o en Agencia"}
          body={
            <div className="flex gap-[.5rem] mt-[.5rem]">
              <div className='flex-1'>
                <img src="/img/bancos/1.png" alt="" />
              </div>
              <div className='flex-1'>
                <img src="/img/bancos/2.png" alt="" />
              </div>
              <div className='flex-1'>
                <img src="/img/bancos/3.png" alt="" />
              </div>
              <div className='flex-1'>
                <img src="/img/bancos/4.png" alt="" />
              </div>
              <div className='flex-1'>
                <img src="/img/bancos/5.png" alt="" />
              </div>
            </div>
          }
          label={
            "ver cuentas"
          }
        />
      </div>
    </div>
  );
}

function FormasBox(props)
{
  const
  {
     img,
     title,
     body,
     label='',
     path
  }=props

   return (
     <div className="relative rounded-[.7rem] flex-1 border-[2px] border-gray-300 flex flex-col justify-between px-[1.5rem] pb-[.8rem] pt-[3.4rem] text-center">
       <div className="w-[5rem] bg-[#fff] h-[5rem] absolute border-[4px] flex justify-center items-center border-myPurple rounded-[100%] top-0 left-[50%] translate-x-[-50%] translate-y-[-50%]">
         <img src={img} className="w-[60%]" alt="" />
       </div>
       <h3 className="text-[16px] block">{title}</h3>
       {body}
       <Link to={path} className="text-[#0088e3] font-bold mt-[1rem] hover:underline" >
         {
            label
         }
       </Link>
     </div>
   );
}