import React from 'react'

export default function RiteBeneficios() {
  return (
    <div>
      <h3 className='text-[18px] mb-[1rem]'>BENEFICIOS</h3>
      <ul className='flex flex-col gap-[.5rem]'>
        <RiteItem 
         img={<img src="/img/icons/medPurple.png" className='w-[100%]'/>} 
         label={"Certificación Digital QR"}
         />
        <RiteItem 
         img={<img src="/img/icons/clockPurple.png" className='w-[100%]'/>} 
         label={"10 sesiones en video"}
         />
        <RiteItem 
         img={<img src="/img/icons/lapPurple.png" className='w-[100%]'/>} 
         label={"Online y a tu ritmo"}
         />
        <RiteItem 
         img={<img src="/img/icons/infinite.png" className='w-[100%]'/>} 
         label={"Acceso por 6 meses"}
         />
      </ul>
    </div>
  );
}

function RiteItem({img,label})
{
    return(
        <li className='flex items-center'>
            <div className='w-[15px]'>
                {img}
            </div>
            <p className='flex-1 text-[16px] ml-[1rem]'>
                 {label}
            </p>
        </li>
    )
}
