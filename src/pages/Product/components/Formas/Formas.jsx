import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcMastercard,faCcVisa,faCcAmex,faCcDinersClub } from '@fortawesome/free-brands-svg-icons';
import React from 'react'
import FormasBox from './components/FormasBox';

export default function Formas() 
{
  return (
    <div>
      <h1 className="text-[26px] px-[3rem] mb-[4rem] product:px-[1rem]">
        Formas de Pago Disponibles
        <span className="border-b-[3px] border-myPurple block w-[20%] mt-[.8rem]"></span>
      </h1>
      <div className="flex gap-[1rem] items-stretch product:flex-col product:gap-[2rem]">
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
          linkLike={true}
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

