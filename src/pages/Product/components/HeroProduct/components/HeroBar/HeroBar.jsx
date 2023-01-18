import React from 'react'

export default function HeroBar(props) 
{
  const
  {
    sesiones,
    certificados,
    total_sesiones
  }=props

  return (
    <div className="custom-container3 flex absolute left-0 w-[100%] bottom-0 justify-between translate-y-[50%] heroProduct:hidden">
      <div className='flex w-[100%] justify-between bg-[#fff] rounded-[.7rem] shadow-lg px-[2rem] py-[1rem]'>
        <HeroBarBox
          title={"inicio"}
          data={"AHORA MISMO"}
          img={"/img/icons/calendar.png"}
        />
        <HeroBarBox
          title={"modalidad"}
          data={`CLASES GRABADAS`}
          img={"/img/icons/play.png"}
        />
        <HeroBarBox
          title={"SESIONES"}
          data={`${sesiones ? sesiones.length : total_sesiones} sesiones`}
          img={"/img/icons/clock.png"}
        />
        <HeroBarBox
          title={"CERTIFICACIÓN"}
          data={`${certificados} Horas` }
          img={"/img/icons/dip2.png"}
        />
        {/* lel */}
      </div>
    </div>
  );
}

function HeroBarBox({data,img,title}) 
{
  return (
    <div className="flex gap-[1rem]">
      <section className="w-[43px]">
        <img src={img} className="w-[100%]" />
      </section>
      <section className="text-myBlack">
        <h3 className="uppercase">{title}</h3>
        <p>{data}</p>
      </section>
    </div>
  );
}
  