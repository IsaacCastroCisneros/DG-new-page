import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export default function CartDetails({cartItems}) 
{
  const totalNormal = cartItems?.reduce((resul,current)=>
  {
    return resul + current.normalPrice
  },0)
  const total = cartItems?.reduce((resul,current)=>
  {
    return resul + current.price 
  },0)

  const descNum =  totalNormal - total
  const desc = Math.round(100-((total*100)/totalNormal)) 

  const sesiones = cartItems?.reduce((resul,current)=>
  {
    return resul + current.sesiones
  },0)

  return (
    <div className="mt-[1rem]">
      <strong className="mb-[.3rem] block">Incluye:</strong>
      <ul className="flex flex-col gap-[.3rem] pb-[1rem] border-b-[1px] border-gray-200">
        <li className="flex gap-[.5rem]">
          <span className=" text-blue-500">
            <FontAwesomeIcon icon={faCheckCircle} />
          </span>
          <span>Acceso aula virtual por un año</span>
        </li>
        <li className="flex gap-[.5rem]">
          <span className=" text-blue-500">
            <FontAwesomeIcon icon={faCheckCircle} />
          </span>
          <span>{sesiones} sesiones en vivo</span>
        </li>
        <li className="flex gap-[.5rem]">
          <span className="text-blue-500">
            <FontAwesomeIcon icon={faCheckCircle} />
          </span>
          <span>Acceso aula virtual por un año</span>
        </li>
      </ul>
      <ul className="mt-[1rem]">
        <li className="flex justify-between">
          <span>Precio Normal:</span>
          <span className="line-through">S/.{Number(totalNormal).toFixed(2)}</span>
        </li>
        <li className="flex justify-between">
          <span>Descuento {desc}%:</span>
          <span >-S/.{Number(descNum).toFixed(2)}</span>
        </li>
        <li className="flex justify-between items-center mt-[1rem]">
          <strong className="text-[1.2rem]">Total a Pagar:</strong>
          <strong className="text-red-500 text-[1.5rem]">S/.{Number(total).toFixed(2)}</strong>
        </li> 
      </ul>
    </div>
  );
}
