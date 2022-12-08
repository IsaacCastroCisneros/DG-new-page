import React from 'react'
import PriceLink from '../../../../components/PriceLink/PriceLink'
import Prices from '../../../../components/Prices/Prices'
import { faCreditCard } from '@fortawesome/free-regular-svg-icons'
import { faShare } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function RiteCardPrice(props) 
{
  const
  {
    precio
  }=props

  return (
    <div className='shadow-xl px-[2rem] py-[1.5rem] rounded-[.5rem]'>
      <Prices precio={precio} gap={'!gap-[.5rem]'}/>
      <div className="flex flex-col gap-[.6rem]">
        <PriceLink icon={faCreditCard} label={"Pagar en Línea"} />
        <PriceLink icon={faShare} label={"Mas Información"}/>
        <PriceLink
          icon={faWhatsapp}
          label={"Mas Información"}
          styles={"!text-[#2cb742] !border-[#2cb742]"}
        />
      </div>
    </div>
  );
}
