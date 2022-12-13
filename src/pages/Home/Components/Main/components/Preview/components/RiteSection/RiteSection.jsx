import React from 'react'
import PriceLink from '../../../../../../../../components/PriceLink/PriceLink'

export const riteSectionContext = React.createContext()

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

  return (
      <div className="max-w-[310px] previewMob:max-w-[100%]">
        <div className="w-[100%] mb-[1.5rem] previewMob:hidden">
          <img className="w-[100%] rounded-[.5rem]" src={imagen} alt="" />
        </div>
        <div className="flex flex-col gap-[.6rem]">
          <PriceLink type={"cart"} id={id} price={precio.final} name={titulo} imagen={imagen}/>
          <PriceLink type={"mas"} tag={url} />
          <PriceLink type={"chat"} />
        </div>
      </div>
  );
}

  