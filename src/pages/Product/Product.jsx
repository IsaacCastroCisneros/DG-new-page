import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Spinner from '../../components/Spinner/Spinner';
import useMyQuery from '../../customHooks/useMyQuery/useMyQuery';
import Beneficios from './components/Beneficios/Beneficios';
import Certificado from './components/Certificado/Certificado';
import ContenidoTem from './components/ContenidoTem/ContenidoTem';
import Formas from './components/Formas/Formas';
import HeroProduct from './components/HeroProduct/HeroProduct';
import Inversion from './components/Inversion/Inversion';
import PorQueParticipar from './components/PorQueParticipar/PorQueParticipar';
import RiteCardPrice from './components/RiteCardPrice/RiteCardPrice';
import Section from './components/Section/Section';
import Footer from '../../components/Footer/Footer'

export default function Product({type}) 
{
  const{id:tag}=useParams();
  
  const{data,isFetching}=useMyQuery({type,tag});

  useEffect(()=>
  {
    const body= document.querySelector('body')

    body?.setAttribute('style','overflow:auto');
  },[])

  return (
    <>
      {isFetching && <Spinner size={200} style={"mt-[4rem]"} />}
      {!isFetching && (
        <>
          <HeroProduct {...data} />
          <main className="custom-container3 !px-[1rem] flex pt-[5rem] gap-[1rem] text-[#000] product:flex-col-reverse heroProduct:pt-[4rem]">
            <section className="flex-[3]">
              <PorQueParticipar tipo={data.tipo} />
              <ContenidoTem {...data} />
              <Section title={"Beneficios"} body={<Beneficios />} />
              <Section title={"Certificado"} body={<Certificado />} />
              <Section title={"Inversión"} body={<Inversion {...data} />} />
              <Formas />
            </section>
            <aside className="flex-[1]">
              <span className="text-[16px] text-center text-[#fd0000] hidden heroProduct:block">
                FECHA DE INICIO: {data.inicio}
              </span>
              <RiteCardPrice {...data} />
            </aside>
          </main>
          <Footer />
        </>
      )}
    </>
  );
}