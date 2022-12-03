import React from 'react'
import Button from '../../../../../../components/Button/Button';
import Input from './Components/Input';
import Selector from './Components/Selector';

const myStyles ='block w-[100%] border-[1px] border-gray-300 rounded-[.2rem] px-[.7rem] py-[.8rem] focus:border-myPurple focus:outline-none'

export default function FormCard() 
{
  return (
    <div className=" bg-[#fff] px-[2rem] pt-[1rem] pb-[2rem] w-[410px] h-[494px] inline-block rounded-[.6rem]">
      <h1 className="capitalize text-center text-myPurple font-bold text-[34px] block mb-[1rem]">dejanos tus datos y te llamamos</h1>
      <form action="" className='flex flex-col gap-[1rem]'>
        <Input placeholder={'Ingresa Nombre'} myStyles={myStyles} />
        <Input placeholder={'Tu Email'} myStyles={myStyles} />
        <Input placeholder={'Ingresa Celular'} myStyles={myStyles} />
        <Selector myStyles={myStyles} />
        <Button label="Solicitar Informacion" 
         styles={
            {
              button:'!bg-myRed !py-[.7rem] !mt-[.3rem]',
              span:'!text-[1.2rem]'
            }
         } 
         />
      </form>
    </div>
  );
}


