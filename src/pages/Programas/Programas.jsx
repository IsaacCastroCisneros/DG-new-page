import React from 'react'
import { useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Spinner from '../../components/Spinner/Spinner';
import useMyQuery from '../../customHooks/useMyQuery';
import Card from '../Home/Components/Main/components/Card/Card';
import ProgramaElaborado from '../Home/Components/ProgramaElaborado/ProgramaElaborado';
import HeroPrograma from './components/HeroPrograma';
import MyHelmet from '../../components/Helmet/MyHelmet';
import theRandomizer from '../../helpers/theRandomizer';
import { useState } from 'react';
import ErrorMsg from '../../components/ErrorMsg/ErrorMsg';

export default function Programas({type}) 
{
  const { data, isFetching } = useMyQuery({ type });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { title, content } = typeHelmet(type);
  
  return (
    <>
      <MyHelmet title={title} content={content} />
      <HeroPrograma type={type} />
      <main className="custom-container2 relative z-[99] pb-[3.5rem]">
        <h1 className="block text-center text-myBlack text-[2.5rem] mt-[4.5rem] phone:font-normal phone:mt-[2rem] mb-[4rem] phone:!text-[1.5rem] phone:font-medium">
          Elige el Programa de tu Interés y Certificate
        </h1>
        {
          data?.err&&<ErrorMsg/>
        }
        {data?.err === undefined && (
          <>
            {isFetching && <Spinner />}
            {!isFetching && (
              <div className="grid grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] gap-[2.5rem] px-[3rem] phone:px-[0]">
                {data?.map((card) => {
                  return <Card key={card.id} type={type} {...card} />;
                })}
              </div>
            )}
          </>
        )}
      </main>
      <ProgramaElaborado />
      <Footer />
    </>
  );
}
/* fdf */
function typeHelmet(type)
{
  switch(type)
  {
    case 'cursos':
      {
        return{title:'Cursos Especializados',content:'Aprende SIAF RP, SIGA MEF, SEACE 3.0, Invierte.pe'}
      }
    case 'diplomas':
      {
        return {
          title: "Diplomas Especializados",
          content: "Certificate eb Finanzas Públicas, Contrataciones del Estado, Inversión Pública",
        };
      }
    case 'diplomados':
      {
        return {
          title: "Diplomados Especializados",
          content: "Diplomados en Administración y Gestión Pública",
        };
      }
  }
}