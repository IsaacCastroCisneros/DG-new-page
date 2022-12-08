import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook,faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import BoxItem from './components/BoxItem';

export default function HeroProductSection(props) 
{
  const
  {
    tipo, 
    titulo, 
    descripcion,
  }=props

  return (
   <section className="text-[#fff]">
      <div className="bg-[#fff] heroProduct:bg-myGreen text-myBlack inline-flex items-center gap-[.5rem] px-[1rem] py-[.2rem] rounded-[1rem] mb-[1.8rem]">
        {
          getIcon(tipo)
        }
        <p className="uppercase text-[16px]">
          <span>{tipo}</span>
          &nbsp;
          <span>GRABADO</span>
        </p>
      </div>
      <h1 className="text-[40px] mb-[1rem] heroProduct:text-[31px]">{titulo}</h1>
      <p className="font-medium text-[18px] block mb-[2.5rem] heroProduct:hidden">{descripcion}</p>
      <div className="flex gap-[1rem] 1221px:hidden">
        <BoxItem label={"Capacítate, desde donde estés y CERTIFICATE AHORA MISMO"} color={"myGreen"} img={<img className="w-[53px] h-[47px]" src={"/img/icons/blackdip.png"} />} />
        <BoxItem label={"Empresa con Certificación ISO 9001-2015"} color={"myPurple"} text={"#fff"} img={<img className="w-[38px] h-[43px]" src={"/img/icons/med.png"} />} />
      </div>
   </section>);
}

function getIcon(tipo)
{
    let icon = undefined;

    if(tipo==='curso')icon=faBook
    if(tipo==='diploma')icon=faGraduationCap
    if(tipo==='diplomado')icon=faGraduationCap

    return <FontAwesomeIcon icon={icon} />
}
