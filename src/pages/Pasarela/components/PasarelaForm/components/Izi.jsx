import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import MyIziInput from './MyIziInput'
import CVV from './CVV'
import { useContext } from 'react'
import { appContext } from '../../../../../context/AppContext'

export default function Izi({payType,load}) 
{
  const[show,setShow]=useState(false)
  const{setShowPopUp}=useContext(appContext)

  const isLoad= load ? '' : '!opacity-0 !pointer-events-none'
  const hidden =  payType==='card' ? '' : '!opacity-0 !pointers-events-none !hidden'

  return (
    <>
      <div className={`flex justify-center pt-[1rem] ${hidden} ${isLoad}`}>
        <div id="myPaymentForm" className="w-[100%] relative">
          <button
            className="absolute top-[5.5rem] left-[28rem] z-[999] question1:left-[26rem] question2:left-[26.5rem] question3:left-[24.5rem] question4:left-[22.5rem] question5:left-[0rem] question5:top-[11.5rem] question6:top-[8.6rem] question6:left-[9rem] question7:left-[8.2rem] question8:left-[4.3rem]"
            onClick={() => setShowPopUp(prev=>{return{...prev,popUp:<CVV/>,show:true}})}
          >
            <FontAwesomeIcon size="xl" icon={faQuestionCircle} />
          </button>
          <div className="kr-embedded w-[100%]">
            <div className="flex flex-col mb-[1rem]">
              <label className="font-bold text-[.9rem] mb-[.4rem]">
                Número de Tarjeta
              </label>
              <MyIziInput field={<div class="kr-pan"></div>} />
            </div>
            <div className="flex gap-[.8rem] mb-[3rem] mob:flex-col">
              <div className="flex flex-[1.3] items-center gap-[.5rem]">
                <label className="font-bold text-[.8rem] flex-[1.3]">
                  Fecha de Expiracion de tarjeta MM/AA
                </label>
                <MyIziInput field={<div class="kr-expiry"></div>} />
              </div>
              <div className="flex flex-[1] items-center gap-[.5rem] question1:gap-[2.5rem]">
                <label className="font-bold text-[.8rem] flex-[1]">
                  Código de Seguridad
                </label>
                <MyIziInput field={<div class="kr-security-code"></div>} />
              </div>
            </div>
            <div className="flex gap-[.5rem]">
              <input type="checkbox" checked />
              <label>
                Aceptar Términos, Condiciones y Política de{" "}
                <a
                  href={
                    "https://www.desarrolloglobal.pe/politicas-de-privacidad/proteccion-datos"
                  }
                  target="_blank"
                  className="text-[#3F8DFD] hover:underline"
                >
                  Protección de Datos.
                </a>
              </label>
            </div>
            <div className="kr-form-error w-[100%] text-center border-[1px] border-red-500"></div>
            <button className="kr-payment-button"></button>
          </div>
        </div>
      </div>
    </>
  );
}
