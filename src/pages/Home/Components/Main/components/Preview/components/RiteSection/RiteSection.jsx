import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard,faShare} from '@fortawesome/free-solid-svg-icons'
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons"
import {Link} from 'react-router-dom'
import React from 'react'

export default function RiteSection({imagen,url}) 
{
  return (
    <div className='max-w-[310px] previewMob:max-w-[100%]'>
      <div className="w-[100%] mb-[1.5rem] previewMob:hidden">
        <img className="w-[100%] rounded-[.5rem]" src={imagen} alt="" />
      </div>
      <div className="flex flex-col gap-[.6rem]">
        <PreviewLink icon={faCreditCard} label={"Pagar en Línea"} />
        <PreviewLink icon={faShare} label={"Mas Información"} path={url} />
        <PreviewLink  icon={faWhatsapp} label={"Mas Información"} styles={'!text-[#2cb742] !border-[#2cb742]'} />
      </div>
    </div>
  );
}

function PreviewLink(props) 
{
    const 
    {
        icon,
        path='/',
        label,
        styles=''
    }=props

    return (
      <Link
        to={path}
        className={`border-[3.5px] items-center px-[1.5rem] flex gap-[1.5rem] py-[.3rem] rounded-[.5rem] border-myPurple text-myPurple text-[20px] ${styles} previewMob:text-[15px]`}
      >
        <span className='text-[2rem] previewMob:text-[1.5rem]'>
          <FontAwesomeIcon icon={icon} />
        </span>
        <span className="font-medium">{label}</span>
      </Link>
    );
}
  