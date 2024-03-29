import React from 'react'
import PriceLink from '../../../../../../../../components/PriceLink/PriceLink'

export const riteSectionContext = React.createContext()

export default function RiteSection(props) 
{
  const
  {
    imagen,
    url,
    productData,
    setShow
  }=props


  return (
    <div className="max-w-[310px] previewMob:max-w-[100%]">
      <div className="w-[100%] mb-[1.5rem] previewMob:hidden">
        <img className="w-[100%] rounded-[.5rem]" src={imagen} alt="" />
      </div>
      <div className="flex flex-col gap-[.6rem]">
        <PriceLink type={"cart"} conTarjeta={true} productData={productData} />
        <button className='w-[100%] flex flex-col items-stretch'
         onClick={()=>setShow(false)}
         >
          <PriceLink type={"cart"} productData={productData} />
        </button>
        <PriceLink type={"mas"} tag={url} productData={productData} />
        <PriceLink type={"chat"} productData={productData} />
      </div>
    </div>
  );
}

  