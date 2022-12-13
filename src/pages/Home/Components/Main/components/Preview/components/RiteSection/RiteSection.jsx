import { faCreditCard,faShare} from '@fortawesome/free-solid-svg-icons'
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons"
import React from 'react'
import PriceLink from '../../../../../../../../components/PriceLink/PriceLink'

export const cartContext = React.createContext()

export default function RiteSection(props) 
{
  const
  {
    imagen,
    url,
    id,
    precio,
    titulo
  }=props

  const contextValues=
  {
    id,
    precio:precio.final,
    name:titulo,
  }

  return (
    <cartContext.Provider value={contextValues}>
      <div className="max-w-[310px] previewMob:max-w-[100%]">
        <div className="w-[100%] mb-[1.5rem] previewMob:hidden">
          <img className="w-[100%] rounded-[.5rem]" src={imagen} alt="" />
        </div>
        <div className="flex flex-col gap-[.6rem]">
          <PriceLink type={"cart"} id={id} price={precio.final} name={titulo} />
          <PriceLink type={"pagar"} />
          <PriceLink type={"mas"} tag={url} />
          <PriceLink type={"chat"} />
        </div>
      </div>
    </cartContext.Provider>
  );
}

  