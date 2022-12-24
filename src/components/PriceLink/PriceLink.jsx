import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import { faShare,faShoppingCart,faCreditCard, faCheckCircle, faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { useContext } from 'react';
import { appContext } from '../../context/AppContext';
import HeroForm from '../../pages/Product/components/HeroProduct/components/HeroForm/HeroForm';
import { useState } from 'react';

const myStyles = `border-[3.5px] items-center px-[1.5rem] flex gap-[1.5rem] product:gap-[.7rem] py-[.3rem] rounded-[.5rem] border-myPurple text-myPurple text-[20px] previewMob:text-[15px]`

export default function PriceLink(props) 
{
    const
    {
      type,
      tag,
      isPopUp=false,
      productData,
      isLinkLike=false,
      conTarjeta,
      isIn
    }=props

    const{setShowPopUp}=useContext(appContext)
   
    let path=''
    if(type==='mas')path=tag

    return (
      <>
        {type === "mas" && isPopUp === false && (
          <Link
            onClick={() => setShowPopUp(false)}
            to={path}
            className={myStyles}
          >
            {type === "mas" && <Mas />}
          </Link>
        )}
        {type === "mas" && isPopUp && (
          <>
            <button
              onClick={() => setShowPopUp({show:true,popUp:<HeroForm isPopUp={true} closeButton={true}/>})}
              to={path}
              className={myStyles}
            >
              {type === "mas" && <Mas/>}
            </button>
          </>
        )}
        {type === "chat" && <Chat asesores={productData?.asesores} name={productData?.titulo}/>}
        {type === "cart" && <Cart {...productData} isLinkLike={isLinkLike} conTarjeta={conTarjeta} isIn={isIn} />}
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

function Chat({asesores,name,productData})
{
  return (
    <>
      <a className={myStyles + " !text-[#2cb742] !border-[#2cb742]"} 
        target={'_blank'}
        href={`https://api.whatsapp.com/send?phone=51${asesores ? asesores[0]?.telefono:''}&text=Hola solicito informacion del programa: ${name}`}>
        <span className="text-[2rem] previewMob:text-[1.5rem]">
          <FontAwesomeIcon icon={faWhatsapp} />
        </span>
        <span className="font-medium">Chat por Whatsapp</span>
      </a>
    </>
  );
}

function Cart(props)
{
  const 
  { 
    id, 
    precio, 
    titulo,
    imagen,
    tipo,
    cursos,
    sesiones:curSesiones ,
    isLinkLike,
    conTarjeta=false,
    isIn 
  } = props;
  
  const navigate= useNavigate();

  const
   {
    setCart,
    cart,
    setShowNoti,
   }=useContext(appContext)

   function isSesiones()
   {
      if(tipo!=='curso')
      {
        let sesiones=[]
        cursos?.forEach(cur=>sesiones=[...sesiones,...cur.sesiones])
        return sesiones
      }
      return curSesiones
   }

  const product = {
      id,
      name:titulo,
      price:precio?.final,
      normalPrice:precio?.normal,
      imagen,
      sesiones:isSesiones(),
      cursos,
      tipo
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
    navigate('/pasarela-pago')
  }

  return (
    <>
      {!isLinkLike && (
        <MyAddToCart   isIn={isIn} addingToCart={addingToCart} conTarjeta={conTarjeta} faCreditCard={faCreditCard} faShoppingCart={faShoppingCart} faCheckCircle={faCheckCircle}  />
      )}
      {isLinkLike && (
        <button
          className="text-[#0088e3] font-bold mt-[1rem] hover:underline"
          onClick={addingToCart}
        >
          <span className="font-bold">Pagar Con Tarjeta</span>
        </button>
      )}
    </>
  );
}

function MyAddToCart(props)
{
  const[showRemove,setShowRemove]=useState(false)

  const
  {
    isIn, 
    addingToCart, 
    conTarjeta, 
    faCreditCard, 
    faShoppingCart, 
    faCheckCircle
  }=props

  return (
    <button
      className={`border-[3.5px] items-center px-[1.5rem] flex gap-[1.5rem] product:gap-[.7rem] py-[.3rem] rounded-[.5rem] border-myPurple text-myPurple text-[20px] previewMob:text-[15px] ${
        isIn ? "!bg-myPurple !text-[#fff]" : ""
      }`}
      onClick={addingToCart}
      onMouseEnter={ isIn ? () => setShowRemove(true) : ''}
      onMouseLeave={isIn ? () => setShowRemove(false) : ''}
    >
      <span className="text-[2rem] previewMob:text-[1.5rem] relative">
        <FontAwesomeIcon icon={conTarjeta ? faCreditCard : faShoppingCart} />
        {isIn && (
          <p className="absolute text-[1.5rem] h-fit right-0 bottom-0 rounded-[100%] translate-x-[50%] bg-[#fff] text-myPurple flex justify-center items-center border-[1px] border-[#fff]">
            <FontAwesomeIcon
              icon={showRemove ? faXmarkCircle : faCheckCircle}
            />
          </p>
        )}
      </span>
      {!showRemove &&!isIn &&(
        <span className="font-medium">
          {conTarjeta ? "Pagar Con Tarjeta" : "Añadir al carrito"}{" "}
        </span>
      )}
      {!showRemove &&isIn&& (
        <span className="font-medium">
          En el Carrito
        </span>
      )}
      {showRemove && (
        <span className="font-medium">
          Eliminar
        </span>
      )}
    </button>
  );
}
  