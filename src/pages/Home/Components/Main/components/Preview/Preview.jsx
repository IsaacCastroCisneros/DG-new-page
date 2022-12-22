import React from 'react'
import { faMedal, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import LeftSection from './components/LeftSection/LeftSection';
import RiteSection from './components/RiteSection/RiteSection';

export default function Preview(props) 
{
  const { titulo ,precio,imagen,tipo,etiqueta } = props;

  const url = `/${tipo}s/${etiqueta}`


  return (
    <div className="text-[#000] flex gap-[2rem] px-[3rem] py-[2.9rem] rounded-[1rem] bg-[#fff] max-w-[960px] previewMob:flex-col previewMob:px-[2rem]">
      <LeftSection
        precio={precio}
        titulo={titulo}
        faMedal={faMedal}
        faCircleCheck={faCircleCheck}
        imagen={imagen}
      />
      <RiteSection imagen={imagen} url={url} productData={props} />
    </div>
  );

}




  