import React,{useState}  from 'react'
import { useContext } from 'react';
import LinkButton from '../../../../components/LinkButton/LinkButton';
import Login from '../../../../components/Login/Login';
import PopUp from '../../../../components/PopUp/PopUp';
import StatusMsg from '../../../../components/StatusMsg/StatusMsg';
import { appContext } from '../../../../context/AppContext';
import CartItems from './components/CartItems/CartItems';
import IziForm from './components/IziForm';
import LoginForm from './components/LoginForm';
import Success from './components/Success';

export default function PasarelaForm() 
{
  const[show,setShow]=useState(false)
  const[showSuccess,setShowSuccess]=useState(false)
  const[showOkPopUp,setShowOkPopUp]=useState(false)
  const{user,cart}=useContext(appContext);

  const isCart = cart ? cart.length>0 : false

  return (
    <>
      <PopUp
        show={show.show}
        setShow={setShow}
        closeButton={false}
        popUp={show.popUp}
      />
      <PopUp
       closeButton={false}
       show={showOkPopUp.show}
       popUp={
        <StatusMsg
          setShow={setShowOkPopUp}
          status={"success"}
          okMsg={"Te haz registrado con exito!!"}
        />
       }
       />
      <div className="flex shadow-xl text-[#000] 926px:flex-col-reverse">
        <section className="flex-1 py-[2rem] px-[1.5rem] flex flex-col justify-between">
          <h1 className="font-bold text-[1.2rem] text-blue-500 mb-[1.5rem]">
            Resumen de compra:
          </h1>
          <CartItems />
        </section>
        <section className="flex-[2.5] bg-[#fff] px-[4rem] py-[3rem] 926px:px-[1.5rem] 926px:py-[2rem] relative">
          {!isCart &&!showSuccess &&<EmptyCart/>}
          {isCart && (
            <>
              {!showSuccess && (
                <>
                  {!user && <LoginForm setShow={setShow} setShowOkPopUp={setShowOkPopUp} />}
                  {user && <IziForm setShowSuccess={setShowSuccess} />}
                </>
              )}
            </>
          )}
          {showSuccess&&!isCart&&<Success />}
        </section>
      </div>
    </>
  );
}

function EmptyCart()
{
  return (
    <div className='h-[100%] flex flex-col justify-center'>
      <h1 className="text-[#000] text-center text-[1.5rem] block mb-[2rem]">
        Debe ingresar programas al carrito!!
      </h1>
      <LinkButton
       label={"Volver"}
       path={'/'}
       styles={{button:'!w-[100%]'}}
       />
    </div>
  );
}
