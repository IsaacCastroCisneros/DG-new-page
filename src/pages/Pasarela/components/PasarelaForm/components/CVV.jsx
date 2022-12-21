import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


export default function CVV({setShow}) 
{
  return (
    <div className="w-[100%] flex justify-center">
      <div className="max-w-[300px]">
        <div className="w-[100%] bg-[#293c7a] py-[.2rem] flex justify-end">
          <button
            className="text-[#fff] flex h-[2rem] w-[2rem] justify-center items-center rounded-[100%] right-0"
            onClick={() => setShow(false)}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <div className="bg-[#fff] px-[1rem] pt-[.7rem] text-[12px]">
          <p className="block mb-[.4rem]">
            Este campo es obligatorio sólo para medios de pago que posean un
            CVV.
          </p>
          <p className="block">
            El código de seguridad de la tarjeta es el código de 3 dígitos
            impreso en el reverso de su tarjeta, en la parte derecha del área de
            la firma.
          </p>
          <div className="text-center w-[100%]">
            <img
              src="/img/cvv.png"
              className="mx-auto my-0"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
