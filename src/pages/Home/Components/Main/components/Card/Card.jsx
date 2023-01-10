import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCalendar,faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import {faVideoCamera} from '@fortawesome/free-solid-svg-icons'
import titleShorter from '../../../../../../helpers/titleShorter'
import LinkButton from '../../../../../../components/LinkButton/LinkButton'
import PriceLink from '../../../../../../components/PriceLink/PriceLink'

export default function Card(props) 
{
  const
  {
    imagen,
    titulo,
    tipo,
    precio,
    total_sesiones,
    id
  }=props

  return (
    <>
      <div className="rounded-[.5rem] overflow-hidden shadow-lg flex flex-col text-[#1f1f20] relative hover:rotate-[-1.5deg] transition-all duration-200">
        <section className="block">
          <img src={imagen} className="w-[100%]" alt="" />
        </section>
        <section className="flex flex-col relative flex-1 justify-between">
          <CardHeader titulo={titulo} tipo={tipo} />
          <CardPrice precio={precio} />
          <div className="py-[1rem] px-[1.5rem] flex items-stretch justify-between">
            <ul>
              <CardDetailItem
                icon={faVideoCamera}
                text={`${total_sesiones} Clases en video`}
              />
              <CardDetailItem icon={faCalendar} text={`Inicio hoy mismo`} />
              <CardDetailItem
                text={`Certificación Digital`}
                isImg={"/img/dip.png"}
              />
            </ul>
            <strong className="flex text-red-500 flex-col justify-center">
              <span className="text-[45px] leading-[2.3rem]">
                {precio.descuento}%
              </span>
              <span>Descuento</span>
            </strong>
          </div>
          <div className="px-[1.5rem] pb-[1rem] flex flex-col gap-[.4rem]">
            <LinkButton
              path={`/${tipo}s/${id}`}
              label={"ver detalles"}
              styles={{
                button:
                  "!py-[.8rem] !text-[#fff] !flex !items-center gap-[1rem]",
                span: "!text-[20px] !text-left !font-medium",
              }}
              icon={{ icon: faCheckCircle, size: "xl" }}
            />
            <PriceLink
              type="cart"
              productData={props}
              styles={{button:'!text-[20px]'}}
              label={<p>Comprar <span className='capitalize'>{tipo}</span></p> }
            />
          </div>
        </section>
      </div>
    </>
  );
}


function CardHeader({titulo,tipo}) 
{
  return (
    <div className="pt-[1rem] pb-[3.5rem] px-[1.5rem]">
      <strong className="text-red-500 text-[18px]">
        <span className='capitalize'>{tipo}</span> Virtual Grabado
      </strong>
      <h1 className="text-rigth text-[29px] text-[#1f1f20] leading-[2rem]">
        {titleShorter(titulo, 40)}
      </h1>
    </div>
  );
}

function CardPrice({precio}) 
{
  return (
    <div className="bg-[#FFDD34] flex px-[1.8rem] py-[.4rem] text-[32px] items-center gap-[2rem]">
      <strong>S/{precio.final.toFixed(2)}</strong>
      <p className="block text-[16px] font-medium">
        Precio Normal <span className="line-through">S/{precio.normal}</span>
      </p>
    </div>
  );
}


function CardDetailItem({icon,text,isImg=false}) 
{
  return (
    <li className="flex text-[16px] gap-[.5rem]">
      <div className='w-[1rem] flex justify-start items-center'>
        {!isImg && <FontAwesomeIcon icon={icon} />}
        {isImg && <img className='w-[100%]' src={isImg} />}
      </div>
      <span>{text}</span>
    </li>
  );
}
                