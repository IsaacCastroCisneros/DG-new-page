import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { useContext } from 'react';
import { appContext } from '../../../../../../../context/AppContext';

export default function CartItem(props) 
{
  const{setCart}=useContext(appContext)

  const
  {
    id,
    imagen,
    name,
    price
  }=props

  function updatingCart(id)
  {
    setCart(prev=>prev.filter(item=>item.id!==id))
  }

  return (
    <div className="flex py-[1rem] relative cartButton">
      <button className='absolute right-0 text-[1.5rem] top-0'
       onClick={()=>updatingCart(id)}
       >
        <FontAwesomeIcon icon={faXmark}/>
       </button>
      <section className="flex-1">
        <img src={imagen} className="w-[100%]" alt="" />
      </section>
      <section className="flex-[2] px-[1rem] flex flex-col">
        <h3 className="text-left">{name}</h3>
        <strong className="text-left text-red-500 text-[1.5rem] flex">
          <span>S/.</span>
          <span>{price}</span>
        </strong>
      </section>
    </div>
  );
}
