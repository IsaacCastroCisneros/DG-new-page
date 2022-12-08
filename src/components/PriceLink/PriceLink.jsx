import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faCreditCard } from '@fortawesome/free-regular-svg-icons'
import { faShare } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function PriceLink({type,tag}) 
{

    let styles = ''
    if(type==='chat')styles = '!text-[#2cb742] !border-[#2cb742]'

    let path=''
    if(type==='mas')path=tag

    return (
      <Link
        to={path}
        className={`border-[3.5px] items-center px-[1.5rem] flex gap-[1.5rem] product:gap-[.7rem] py-[.3rem] rounded-[.5rem] border-myPurple text-myPurple text-[20px] ${styles} previewMob:text-[15px]`}
      >
        {
          type==='pagar'&&<Pagar/>
        }
        {
          type==='mas'&&<Mas/>
        }
        {
          type==='chat'&&<Chat/>
        }
      </Link>
    );
}

function Pagar()
{
  return (
    <>
      <span className="text-[2rem] previewMob:text-[1.5rem]">
        <FontAwesomeIcon icon={faCreditCard} />
      </span>
      <span className="font-medium">Pagar en Línea</span>
    </>
  );
}

function Mas()
{
  return (
    <>
      <span className="text-[2rem] previewMob:text-[1.5rem]">
        <FontAwesomeIcon icon={faShare} />
      </span>
      <span className="font-medium">Mas Información</span>
    </>
  );
}

function Chat()
{
  return (
    <>
      <span className="text-[2rem] previewMob:text-[1.5rem]">
        <FontAwesomeIcon icon={faWhatsapp} />
      </span>
      <span className="font-medium">Chat por Whatsapp</span>
    </>
  );
}
