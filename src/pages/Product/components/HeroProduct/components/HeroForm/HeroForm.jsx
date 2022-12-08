import React from 'react'
import Button from '../../../../../../components/Button/Button';
import FormInput from './components/FormInput';

export default function HeroForm() 
{
  return (
    <div className="bg-myPurple px-[3rem] heroProduct:px-[2.5rem] py-[1.5rem] rounded-[.5rem] heroProduct:translate-y-[2rem]">
      <h1 className="text-myGreen2 text-[32px] mb-[.5rem] text-center heroProduct:text-[23px]">
        INSCRÍBETE AQUÍ
      </h1>
      <p className="text-[16px] block text-[#fff] font-medium mb-[1rem] text-center heroProduct:text-[16px]">
        Déjanos tus datos y nos contactaremos contigo
      </p>
      <form className="w-[100%] text-[#fff]">
        <div className="flex flex-col gap-[.8rem] w-[100%] mb-[1rem]">
          <FormInput
            icon={"/img/icons/user.png"}
            placeHolder={"Ingresar Primer Nombre"}
          />
          <FormInput
            icon={"/img/icons/carta.png"}
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
            button: "!bg-myRed !px-0 w-[100%] py-[.7rem] heroProduct:!px-[.7rem]",
            span: "!text-[18px] !font-medium heroProduct:!text-[15px]",
          }}
        />
      </form>
    </div>
  );
}


  