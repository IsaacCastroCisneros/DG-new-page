import React from 'react'
import CartItem from './component/CartItem';

export default function Menu(props) 
{
  const 
  {
    cart,
    tot,
    showCart,
    mob
  }=props

  const showing = showCart ? {opacity:1,pointerEvents:'auto',top:'135%'} : {}

  if(mob)
  {
    showing.position='relative'
    showing.minWidth='0'
  }

  return (
    <div className="cartButton absolute bg-[#fff] px-[1.8rem] py-[1rem] min-w-[27rem] top-[50%] opacity-0 pointer-events-none shadow-2xl rounded-[.5rem] left-[50%] translate-x-[-50%] transition-all duration-200"
     style={showing}
     >
      <section className="flex justify-between border-b-[1px] border-gray-300 py-[.5rem]">
        <strong>Carrito</strong>
        <div className="flex text-red-500 font-bold bg-pink-100 px-[.8rem] py-[.1rem] gap-[.5rem] rounded-[.8rem]">
          <span>{cart.length}</span>
          {
            cart.length>1&&
            <span>Programas</span>
          }
          {
            cart.length<=1&&
            <span>Programa</span>
          }
        </div>
      </section>
      <section>
        {cart.map((item) => {
          return <CartItem key={item.id} mob={mob} {...item} />;
        })}
      </section>
      <section className='border-gray-300 border-t-[1px]'>
        <strong className='flex gap-[.5rem] text-[2rem]'>
          Total:
          <p className='text-red-500'>
            <span>S/.</span>
            <span>{tot}</span> 
          </p>
        </strong>
      </section>
    </div>
  );
}
