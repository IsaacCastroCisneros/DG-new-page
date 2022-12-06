import React from 'react'

export default function HeroBar(props) 
{
  const
  {
    inicio,
    sesiones,
    tipo_clase,
    total_sesiones
  }=props

  console.log(props)

  return (
    <div className="custom-container3 flex absolute bg-[#fff] w-[100%] bottom-0 justify-between px-[1rem] py-[1rem] rounded-[.7rem] translate-y-[50%] shadow-lg">
      <HeroBarBox
        title={"inicio"}
        data={inicio}
        img={"/img/icons/calendar.png"}
      />
      <HeroBarBox
        title={"modalidad"}
        data={`Virtual ${tipo_clase}`}
        img={"/img/icons/play.png"}
      />
      <HeroBarBox
        title={"SESIONES"}
        data={`${sesiones ? sesiones.length:total_sesiones} sesiones`}
        img={"/img/icons/clock.png"}
      />
      <HeroBarBox
        title={"CERTIFICACIÓN"}
        data={`200 horas`}
        img={"/img/icons/dip2.png"}
      />
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
  