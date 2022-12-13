import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faCreditCard } from '@fortawesome/free-regular-svg-icons'
import { faShare } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { useContext } from 'react';
import { cartContext } from '../../pages/Home/Components/Main/components/Preview/components/RiteSection/RiteSection';
import { useEffect } from 'react';

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
            {type === "pagar" && <Pagar />}
            {type === "mas" && <Mas />}
            {type === "chat" && <Chat />}
          </Link>
        }
        {
          type==='cart'&&<Cart/>
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

function Cart()
{
  const[cart,setCart]=useState([])
  const { id, price, name } = useContext(cartContext);

  const product = {
    id,
    name,
    quantity: 1,
    price,
  };

  const isSame = cart.find(prod=> prod.id === product.id)

  useEffect(()=>
  {
    const cart = localStorage.getItem('cart');
    if(cart===null)return
    setCart(JSON.parse(cart))
  },[])

  useEffect(()=>
  {
    localStorage.setItem('cart',JSON.stringify(cart))
  },[cart])

  function addingToCart()
  {
    setCart([...cart,product])
  }

  return (
    <button className="border-[3.5px] items-center px-[1.5rem] flex gap-[1.5rem] product:gap-[.7rem] py-[.3rem] rounded-[.5rem] border-myPurple text-myPurple text-[20px] previewMob:text-[15px]"
     onClick={
       addingToCart
     }
     >
      <span className="text-[2rem] previewMob:text-[1.5rem]">
        <FontAwesomeIcon icon={faWhatsapp} />
      </span>
      <span className="font-medium">Añadir al carrito</span>
    </button>
  );
}
