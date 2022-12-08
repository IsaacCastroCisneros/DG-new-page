import React from 'react'
import { faCreditCard,faShare } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import PriceLink from '../../../../components/PriceLink/PriceLink';

export default function Inversion(props) 
{
  const
  {
    precio
  }=props

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-[1rem] flex-[1]">
        <section>
          <p className="text-[20px]">Inversión Promocional</p>
          <strong className="text-[40px]">
            S/ {Number(precio.final).toFixed(2)}
          </strong>
        </section>
        <section>
          <p className="text-[20px]">Inversión Promocional</p>
          <span className="text-[40px] line-through text-[#fd0000]">
            {Number(precio.normal).toFixed(2)}
          </span>
        </section>
      </div>
      <section className='flex-[.9]'>
        <h1 className="text-[26px] font-normal mb-[2rem] text-right">Estamos para ayudarte</h1>
        <div className="flex flex-col gap-[.5rem]">
          <PriceLink icon={faCreditCard} label={"Pagar en Línea"} />
          <PriceLink icon={faShare} label={"Mas Información"} />
          <PriceLink
            icon={faWhatsapp}
            label={"Mas Información"}
            styles={"!text-[#2cb742] !border-[#2cb742]"}
          />
        </div>
      </section>
    </div>
  );
}
