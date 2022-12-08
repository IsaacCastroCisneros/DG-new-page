import { faCreditCard,faShare} from '@fortawesome/free-solid-svg-icons'
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons"
import React from 'react'
import PriceLink from '../../../../../../../../components/PriceLink/PriceLink'

export default function RiteSection({imagen,url}) 
{
  return (
    <div className='max-w-[310px] previewMob:max-w-[100%]'>
      <div className="w-[100%] mb-[1.5rem] previewMob:hidden">
        <img className="w-[100%] rounded-[.5rem]" src={imagen} alt="" />
      </div>
      <div className="flex flex-col gap-[.6rem]">
        <PriceLink icon={faCreditCard} label={"Pagar en Línea"} />
        <PriceLink icon={faShare} label={"Mas Información"} path={url} />
        <PriceLink  icon={faWhatsapp} label={"Mas Información"} styles={'!text-[#2cb742] !border-[#2cb742]'} />
      </div>
    </div>
  );
}

  