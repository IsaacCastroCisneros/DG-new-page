import React,{useState}  from 'react'
import { useContext } from 'react';
import LinkButton from '../../../../components/LinkButton/LinkButton';
import { appContext } from '../../../../context/AppContext';
import CartItems from './components/CartItems/CartItems';
import IziForm from './components/IziForm';
import LoginForm from './components/LoginForm';
import Success from './components/Success';
import { faGraduationCap,faMedal } from '@fortawesome/free-solid-svg-icons';
import {faBook} from '@fortawesome/free-solid-svg-icons'

export default function PasarelaForm() 
{
  const[showSuccess,setShowSuccess]=useState(false);
  const{user,cart}=useContext(appContext);

  const isCart = cart ? cart.length>0 : false

  return (
    <>
      <div className="flex shadow-xl text-[#000] 926px:flex-col-reverse">
        {isCart && (
          <section className="flex-1 py-[2rem] px-[1.5rem] flex flex-col justify-between">
            <h1 className="font-bold text-[1.2rem] text-blue-500 mb-[1.5rem]">
              Resumen de compra:
            </h1>
            <CartItems />
          </section>
        )}
        <section className="flex-[2.5] bg-[#fff] px-[4rem] py-[3rem] 926px:px-[1.5rem] 926px:py-[2rem] relative">
          {!isCart && !showSuccess && <EmptyCart />}
          {isCart && (
            <>
              {!showSuccess && (
                <>
                  {!user && <LoginForm/>}
                  {user && <IziForm setShowSuccess={setShowSuccess}/>}
                </>
              )}
            </>
          )}
          {showSuccess && !isCart && <Success />}
        </section>
      </div>
    </>
  );
}

function EmptyCart()
{
  return (
    <div className="h-[100%] flex flex-col justify-center items-center">
      <h1 className="text-[#000] text-center text-[1.5rem] block mb-[2rem]">
        Debe ingresar programas al carrito!!
      </h1>
      <div className="flex flex-col gap-[.5rem] items-center w-[15rem] max-w-[100%]">
        <LinkButton
          label={"Ver cursos"}
          styles={{
            button:
              "w-[100%] !py-[.7rem] !font-bold !flex !items-center !gap-[1rem] !text-[#fff] !justify-center",
          }}
          path={"/cursos"}
          icon={{ icon: faBook }}
        />
        <LinkButton
          label={"Ver Diplomas"}
          styles={{
            button:
              "w-[100%] !py-[.7rem] !font-bold !flex !items-center !gap-[1rem] !text-[#fff] !justify-center",
          }}
          path={"/diplomas"}
          icon={{icon:faGraduationCap}}
        />
        <LinkButton
          label={"Ver Diplomados"}
          styles={{
            button:
              "w-[100%] !py-[.7rem] !font-bold !flex !items-center !gap-[1rem] !text-[#fff] !justify-center",
          }}
          icon={{icon:faMedal}}
          path={"/diplomados"}
        />
      </div>
    </div>
  );
}
