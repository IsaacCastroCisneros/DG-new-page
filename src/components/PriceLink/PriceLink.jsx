import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faCreditCard } from '@fortawesome/free-regular-svg-icons'
import { faShare,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { useContext } from 'react';
import { appContext } from '../../context/AppContext';


export default function PriceLink(props) 
{
    const
    {
      type,
      tag,
    }=props

    let styles = ''
    if(type==='chat')styles = '!text-[#2cb742] !border-[#2cb742]'

    let path=''
    if(type==='mas')path=tag


    return (
      <>
        {
         type!=='cart'&&<Link
            to={path}
            className={`border-[3.5px] items-center px-[1.5rem] flex gap-[1.5rem] product:gap-[.7rem] py-[.3rem] rounded-[.5rem] border-myPurple text-myPurple text-[20px] ${styles} previewMob:text-[15px]`}
          >
            {type === "mas" && <Mas />}
            {type === "chat" && <Chat />}
          </Link>
        }
        {
          type==='cart'&&<Cart {...props}/>
        }
      </>

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

function Cart(props)
{
  const { id, price, name,imagen } = props;

  const
   {
    setCart,
    cart,
    setShowNoti,
    setShowPopUp
   }=useContext(appContext)

  const product = {
      id,
      name,
      price,
      imagen
  };

  function addingToCart()
  {
    const isSame = cart.find(prod=> prod.id === product.id)
    if(isSame!==undefined)
    {
      setShowNoti({show:true,status:'same'})
      return
    }
    
    setShowNoti({show:true,status:'ok'})
    setCart([...cart,product])
    setShowPopUp(false)
  }

  return (
    <button className="border-[3.5px] items-center px-[1.5rem] flex gap-[1.5rem] product:gap-[.7rem] py-[.3rem] rounded-[.5rem] border-myPurple text-myPurple text-[20px] previewMob:text-[15px]"
     onClick={
       addingToCart
     }
     >
      <span className="text-[2rem] previewMob:text-[1.5rem]">
        <FontAwesomeIcon icon={faShoppingCart} />
      </span>
      <span className="font-medium">Añadir al carrito</span>
    </button>
  );
}
