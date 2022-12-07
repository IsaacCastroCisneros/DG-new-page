import React from 'react'
import Box from './components/Box';

export default function UnderBar()
{
  return (
    <div className="bg-myPurple py-[2rem] phone:pt-[7rem]">
      <section className="custom-container2 flex justify-between gap-[5rem] flex-wrap gridPurple:grid gridPurple:grid-cols-[repeat(2,50%)] gridPurple:gap-x-[1rem] phone:gap-[1rem]">
        <Box label={'100% Virtuales Clases 24/7'} icon={<img src="/img/hero-under-bar/laptop.png" className="h-[51px] phone:h-[34px]" alt="" />} />
        <Box label={'certificación disponible'} icon={<img src="/img/beni-icons/lap.png" className="h-[53px] phone:h-[34px]" alt="" />} />
        <Box label={'profesores expertos'} icon={<img src="/img/beni-icons/presentation.png" className="h-[47px] phone:h-[34px] " alt="" />} />
        <Box label={'certificacion disponible'} icon={<img src="/img/hero-under-bar/medal.png" className=" h-[53px] phone:h-[34px]" alt="" />} />
      </section>
    </div>
  );
}
