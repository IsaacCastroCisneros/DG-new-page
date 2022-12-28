import React from 'react'
import MyMsg from '../MyMsg/MyMsg'
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons'

export default function MyForm(props) 
{
  const
  {
    showStatus,
    form,
    hiddenEarly=''
  }=props
  
  return (
    <div className="relative">
      {showStatus.show && (
        <MyMsg
          icon={faXmarkCircle}
          styles={"!bg-red-500"}
          label={showStatus.label}
        />
      )}
      <div className="w-[100%] relative flex items-stretch bg-[#fff] rounded-[.5rem] overflow-hidden">
        <section
          className={`flex-1 bg-myPurple py-[4rem] px-[2.5rem] rounded-[.5rem] 826px:hidden ${hiddenEarly}`}
        >
          <div className="flex justify-start mb-[2rem]">
            <img src="/img/nuevo_logo_blanco.png" className="w-[10rem]" />
          </div>
          <img src="/img/LoginRegistro.webp" className="w-[100%]" />
        </section>
        <section className="flex-1 bg-[#fff] text-[#000] py-[3rem] px-[4.8rem] 826px:px-[2rem]">
          {form}
        </section>
      </div>
    </div>
  );
}
