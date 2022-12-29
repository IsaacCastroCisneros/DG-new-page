import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import { useContext } from 'react';
import { appContext } from '../../../../../../../context/AppContext';

export default function CardItem(props) 
{
  const{setCart}=useContext(appContext)

  const
  {
    id,
    name,
    imagen,
    tipo,
    price
  }=props

  function removingItem()
  {
     setCart(prev=>prev.filter(item=>item.id!==id))
  }

  return (
    <div className="mb-[1rem] relative flex gap-[.5rem] border-b-[1px] border-gray-200 px-[.8rem] pb-[.3rem] 926px:flex-col">
      <button className='absolute right-0 top-0 flex justify-center items-center h-[fit] text-[1.4rem]'
       onClick={removingItem}
       >
        <FontAwesomeIcon icon={faXmarkCircle} />
      </button>
      <div className="w-[80.02px]">
        <img src={imagen} alt="" className="img-fluid w-[100%]" />
      </div>
      <section className="flex-[1]">
        <p className="text-red-500 font-medium">
          <span className="capitalize">{tipo}</span> Grabado
        </p>
        <strong
          title={name}
          className="whitespace-nowrap overflow-hidden text-ellipsis block max-w-[239.4px] mb-[.2rem]"
        >
          {name}
        </strong>
        <span>S/.{price.toFixed(2)}</span>
      </section>
    </div>
  );
}