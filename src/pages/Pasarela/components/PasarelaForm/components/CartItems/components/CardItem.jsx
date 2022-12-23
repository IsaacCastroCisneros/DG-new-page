import React from 'react'

export default function CardItem(props) 
{
  const
  {
    name,
    imagen,
    tipo,
    price
  }=props

  return (
    <div className="mb-[1rem] flex gap-[.5rem] border-b-[1px] border-gray-200 px-[.8rem] pb-[.3rem] 926px:flex-col">
      <div className='w-[80.02px]'>
        <img src={imagen} alt="" className="img-fluid w-[100%]" />
      </div>
      <section className='flex-[1]'>
         <p className='text-red-500 font-medium'>
           <span className='capitalize'>{tipo}</span> Grabado
         </p>
         <strong title={name} className="whitespace-nowrap overflow-hidden text-ellipsis block max-w-[239.4px] mb-[.2rem]" >
          {name}
         </strong>
         <span>
           S/.{price.toFixed(2)}
         </span>
      </section>
    </div>
  );
}