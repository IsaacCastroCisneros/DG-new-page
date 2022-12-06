import React from 'react'
import FormCard from '../FormCard/FormCard';


export default function HeroBanner() 
{
  return (
    <div className="bg-myPurpleBg h-[533px] mob:h-[auto] mob:pb-[2rem] relative phone:h-[36rem]">
      <section className="custom-container2 flex h-[100%] gap-[1rem] items-stretch mob:flex-col mob:items-center">
        <div className="flex-1 pt-[5.5rem] phone:pt-[1rem]">
          <h1 className="text-[3.3rem] font-normal text-[#fff] leading-tight mb-[1.5rem] phone:text-[2.5rem] phone:mb-[.5rem]">
            Certifícate en Gestión Pública 100% Virtual
          </h1>
          <p className="text-[#fff] text-[1.1rem] pr-[5rem] block mob:hidden">
            Accede y Certifícate de manera inmediata en nuestros programas y
            aprende Gestión Pública con cursos, diplomas y diplomados
            disponibles desde nuestra plataforma 24/7.
          </p>
        </div>
        <div className="flex-[1] flex items-end noImgHero:hidden">
          <img src="/img/girl.png" className="w-[100%]" />
        </div>
        <div className="flex items-center phone:absolute phone:bottom-[-5rem] phone:w-[85%]">
          <FormCard />
        </div>
      </section>
    </div>
  );
}
