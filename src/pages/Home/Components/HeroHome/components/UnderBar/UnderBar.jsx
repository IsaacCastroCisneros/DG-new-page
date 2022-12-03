import React from 'react'
import Box from './components/Box';

export default function UnderBar()
{
  return (
    <div className="bg-myPurple py-[2rem]">
      <section className="custom-container2 flex justify-between gap-[8rem]">
        <Box label={'100% Virtuales Clases 24/7'} icon={<img src="/img/hero-under-bar/laptop.png" className="w-[76px] h-[51px]" alt="" />} />
        <Box label={'certificación disponible'} icon={<img src="/img/hero-under-bar/medal.png" className="w-[46px] h-[53px]" alt="" />} />
        <Box label={'profesores expertos'} icon={<img src="/img/hero-under-bar/medal.png" className="w-[46px] h-[53px]" alt="" />} />
        <Box label={'certificacion disponible'} icon={<img src="/img/hero-under-bar/medal.png" className="w-[46px] h-[53px]" alt="" />} />
      </section>
    </div>
  );
}
