import React from 'react'
import { useContext } from 'react';
import Button from '../../../../../components/Button/Button';
import LinkButton from '../../../../../components/LinkButton/LinkButton';
import Login from '../../../../../components/Login/Login';
import SignUp from '../../../../../components/SignUp/SignUp';
import { appContext } from '../../../../../context/AppContext';

export default function LoginForm() 
{
  const{setShowPopUp}=useContext(appContext)

  return (
    <>
      <h1 className="text-[1.3rem] block mb-[1rem]">
        Bienvenido a la pasarela de pagos
      </h1>
      <p className="block mb-[1.5rem]">
        Compra el Programa elegido desde nuestra plataforma de manera segura,
        puedes iniciar sesión si eres alumno ó regístrate si aún no estas
        registrado. 🙂
      </p>
      <div className="flex justify-center mb-[2rem]">
        <div className="py-[.5rem] px-[.8rem] border-[1px] border-gray-300 rounded-[.5rem]">
          <img src="/img/logo-DG-nuevo.webp" className="w-[15rem]"/>
        </div>
      </div>
      <div className='flex flex-col gap-[1rem]'>
        <Button
          label={"Ingresa aqui"}
          styles={{ button: "!w-[100%] !py-[.7rem] !font-bold" }}
          onClick={() => setShowPopUp({ show: true,popUp:<Login setShow={setShowPopUp}/> })}
        />
        <Button
          label={"Registrate aqui"}
          styles={{ button: "!w-[100%] !py-[.7rem] !font-bold" }}
          onClick={() => setShowPopUp({ show: true,popUp:<SignUp setShow={setShowPopUp}/> })}
        />
      </div>
    </>
  );
}
