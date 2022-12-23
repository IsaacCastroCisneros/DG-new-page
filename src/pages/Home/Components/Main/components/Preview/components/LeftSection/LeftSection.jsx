import React from 'react'
import SpanItem from './components/SpanItem/SpanItem';
import Prices from '../../../../../../../../components/Prices/Prices';


export default function LeftSection(props) 
{
  const { titulo, precio, faMedal, faCircleCheck,imagen } = props;

  return (
    <section className="flex flex-col justify-between max-w-[30rem] gap-[1rem]">
      <div className="w-[100%] mb-[1.5rem] hidden previewMob:block">
        <img className="w-[100%] rounded-[.5rem]" src={imagen} alt="" />
      </div>
      <span className="bg-[#a2ffe3] px-[1rem] py-[.4rem] rounded-[1rem] text-[19px] w-fit previewMob:text-[13px] previewMob:mb-[1rem]">
        Curso virtual en modalidad Asincrónica
      </span>
      <h1 className="font-normal text-[30px] previewMob:text-[20px] previewMob:mb-[1rem]">
        {titulo}
      </h1>
      <div className="flex gap-[2rem] previewMob:flex-col previewMob:gap-[0] previewMob:mb-[1rem]">
        <SpanItem label={"Certificación por 200 Horas"} icon={faMedal} />
        <SpanItem label={"Acceso Inmediato"} icon={faCircleCheck} />
      </div>
      <span className="text-[19px]">Inversión Promocional</span>
      <Prices precio={precio} />
    </section>
  );
}


  