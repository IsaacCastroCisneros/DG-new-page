import React from 'react'
import FormCard from '../FormCard/FormCard';


export default function HeroBanner() 
{
  return (
    <div className="bg-myPurpleBg h-[533px]">
      <section className="custom-container2 flex h-[100%] gap-[1rem] items-stretch">
        <div className="flex-1 pt-[5.5rem]">
          <h1 className="text-[3.3rem] font-normal text-[#fff] leading-tight mb-[1.5rem]">
            Certifícate en Gestión Pública 100% Virtual
          </h1>
          <p className="text-[#fff] text-[1.1rem] pr-[5rem] block">
            Accede y Certifícate de manera inmediata en nuestros programas y
            aprende Gestión Pública con cursos, diplomas y diplomados
            disponibles desde nuestra plataforma 24/7.
          </p>
        </div>
        <div className="flex-[1] flex items-end">
          <img src="/img/girl.png" className="w-[100%]" />
        </div>
        <div className="flex items-center">
          <FormCard />
        </div>
      </section>
    </div>
  );
}
