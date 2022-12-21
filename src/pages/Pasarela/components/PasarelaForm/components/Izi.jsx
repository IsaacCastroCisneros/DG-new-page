import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import MyIziInput from './MyIziInput'
import { Link } from 'react-router-dom'

export default function Izi() {
  return (
    <div className="flex justify-center pt-[1rem]">
        <div id="myPaymentForm" className="w-[100%] relative">
          <button
            className="absolute top-[5.8rem] left-[28rem] z-[999] question1:left-[22rem] question1:top-[6.2rem] question2:top-[8.5rem] question3:left-[13rem] question4:top-[9rem] question4:left-[10rem] question5:left-[9rem] question6:left-[5.5rem] question6:top-[10.8rem]"
            onClick={() => setShow(true)}
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
                <label className="font-bold text-[.9rem] flex-[1.3]">
                  Fecha de Expiracion de tarjeta MM/AA
                </label>
                <MyIziInput field={<div class="kr-expiry"></div>} />
              </div>
              <div className="flex flex-[1] items-center gap-[.5rem] question1:gap-[2.5rem]">
                <label className="font-bold text-[.9rem] flex-[1]">
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
                  href={"https://www.desarrolloglobal.pe/politicas-de-privacidad/proteccion-datos"}
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
  )
}
