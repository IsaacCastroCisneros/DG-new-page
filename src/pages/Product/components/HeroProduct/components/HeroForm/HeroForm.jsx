import React from 'react'
import Button from '../../../../../../components/Button/Button';
import FormInput from './components/FormInput';

export default function HeroForm() 
{
  return (
    <div className="bg-myPurple px-[3rem] py-[1.5rem] rounded-[.5rem] w-[370px]">
      <h1 className="text-myGreen2 text-[32px] mb-[.5rem] text-center">
        INSCRÍBETE AQUÍ
      </h1>
      <p className="text-[16px] block text-[#fff] font-medium mb-[1rem] text-center">
        Déjanos tus datos y nos contactaremos contigo
      </p>
      <form className="w-fit text-[#fff]">
        <div className="flex flex-col gap-[.8rem] w-fit mb-[1rem]">
          <FormInput
            icon={"/img/icons/user.png"}
            placeHolder={"Ingresar Primer Nombre"}
          />
          <FormInput
            icon={"/img/icons/tel.png"}
            placeHolder={"Ingresar Correo Electrónico"}
          />
          <FormInput
            icon={"/img/icons/tel.png"}
            placeHolder={"Ingresar Celular"}
          />
        </div>
        <div className='flex mb-[1rem] gap-[.5rem]'>
          <input type={"checkbox"} />
          <label className='text-center text-[12px]'>Acepto política de privacidad de datos personales</label>
        </div>
        <Button
          label={"SOLICITAR INFORMACIÓN"}
          styles={{
            button: "!bg-myRed !px-0 w-[100%] py-[.7rem]",
            span: "!text-[18px] font-medium",
          }}
        />
      </form>
    </div>
  );
}


  