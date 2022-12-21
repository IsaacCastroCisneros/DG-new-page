import React,{useState}  from 'react'
import { useContext } from 'react';
import Login from '../../../../components/NavBar/components/Login/Login';
import PopUp from '../../../../components/PopUp/PopUp';
import { appContext } from '../../../../context/AppContext';
import CartItems from './components/CartItems/CartItems';
import IziForm from './components/IziForm';
import LoginForm from './components/LoginForm';

export default function PasarelaForm() 
{
  const[show,setShow]=useState(false)
  const{user}=useContext(appContext);

  return (
    <>
      <PopUp
        show={show}
        setShow={setShow}
        popUp={<Login setShow={setShow} />}
      />
      <div className="flex shadow-xl text-[#000]">
        <section className="flex-1">
          <CartItems/>
        </section>
        <section className="flex-[2.5] bg-[#fff] px-[4rem] py-[3rem]">
          {!user&&<LoginForm setShow={setShow} />}
          {
            user&&<IziForm/>
          }
        </section>
      </div>
    </>
  );
}
