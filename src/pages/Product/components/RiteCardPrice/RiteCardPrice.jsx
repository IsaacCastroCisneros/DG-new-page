import React from 'react'
import PriceLink from '../../../../components/PriceLink/PriceLink'
import Prices from '../../../../components/Prices/Prices'
import RiteBeneficios from './components/RiteBeneficios'

export default function RiteCardPrice(props) 
{
  const
  {
    precio,
    titulo,
    imagen,
    asesores
  }=props

  return (
    <div className='sticky shadow-xl px-[2rem] py-[1.5rem] rounded-[.5rem] top-[.5rem]'>
      <Prices precio={precio} gap={'!gap-[.5rem]'}/>
      <div className="flex flex-col gap-[.6rem] mt-[1rem] mb-[1rem]">
        <PriceLink type={'cart'} price={precio.final} name={titulo} imagen={imagen}/>
        <PriceLink type={'mas'} isPopUp={true}/>
        <PriceLink type={'chat'} asesores={asesores} name={titulo} />
      </div>
      <RiteBeneficios/>
    </div>
  );
}
