import React from 'react'
import { useState } from 'react';
import PopUp from '../../../../components/PopUp/PopUp';
import Preview from './components/Preview/Preview';
import Results from './components/Results/Results'

export default function EligeElPrograma() 
{
  const[show,setShow]=useState(false)
  
  return (
    <>
      <PopUp show={show} setShow={setShow} popUp={<Preview/>} />
      <section className="custom-container2 text-[#000] pb-[7rem] phone:pb-[4rem]">
        <h1 className="block text-center text-[2.5rem] mt-[4.5rem] phone:font-normal phone:text-[2.4remrem] phone:mt-[2rem]">
          Elige el Programa de tu Interés y Certificate
        </h1>
        <p className="capitalize block text-center text-[1.5rem] mt-[1rem] mb-[3rem] phone:hidden">
          Todos los programas son en modalidad "Virtual Asincronica"
        </p>
        <p className="capitalize text-center text-[22px] mt-[1rem] mb-[3rem] hidden phone:block phone:mb-[1.3rem]">
          Modalidad "Virtual Asincronica"
        </p>
        <Results show={show} setShow={setShow} />
      </section>
    </>
  );
}
