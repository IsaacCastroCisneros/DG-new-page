import React from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../../components/Spinner/Spinner';
import useMyQuery from '../../customHooks/useMyQuery';
import Beneficios from './components/Beneficios/Beneficios';
import Certificado from './components/Certificado/Certificado';
import ContenidoTem from './components/ContenidoTem/ContenidoTem';
import Formas from './components/Formas/Formas';
import HeroProduct from './components/HeroProduct/HeroProduct';
import Inversion from './components/Inversion/Inversion';
import RiteCardPrice from './components/RiteCardPrice/RiteCardPrice';
import Section from './components/Section/Section';
import Footer from '../../components/Footer/Footer';
import { useContext } from 'react';
import { appContext } from '../../context/AppContext';
import MyHelmetProduct from '../../components/Helmet/MyHelmetProduct';
import WhatsButton from './components/WhatsButton/WhatsButton';
import ErrorMsg from '../../components/ErrorMsg/ErrorMsg';

export const productContext = React.createContext()

export default function Product({type}) 
{
  const{cart}=useContext(appContext)
  const{id:tag}=useParams();
  const{data,isFetching}=useMyQuery({type,tag});
  
  let isIn = undefined;

  if(data)
  {
    isIn = cart.find(item=>item.id===data.id)
  }

  const contextValues=
  {
    ...data,
    isIn
  }

  return (
    <productContext.Provider value={contextValues}>
      {
        data?.err&&
        <ErrorMsg/>
      }
      {
        data?.err===undefined&&
        <>
          <MyHelmetProduct
            titulo={data?.titulo}
            descripcion={data?.descripcion}
            imagen={data?.imagen}
            seo={data?.seo}
          />
          {isFetching && <Spinner size={200} style={"mt-[4rem]"} />}
          {!isFetching && (
            <>
              <WhatsButton {...data} />
              <HeroProduct {...data} />
              <main className="custom-container3 !px-[1rem] flex pt-[5rem] gap-[1rem] text-[#000] product:flex-col-reverse heroProduct:pt-[4rem]">
                <section className="flex-[3] max-w-[832.91px]">
                  {/* <PorQueParticipar tipo={data.tipo} /> */}
                  <ContenidoTem {...data} />
                  <Section title={"Beneficios"} body={<Beneficios />} />
                  <Section title={"Certificado"} body={<Certificado />} />
                  <Section title={"Inversión"} body={<Inversion {...data} />} />
                  <Formas data={data} />
                </section>
                <aside className="flex-[1]">
                  <span className="text-[16px] text-center text-[#fd0000] hidden heroProduct:block">
                    FECHA DE INICIO: AHORA MISMO
                  </span>
                  <RiteCardPrice {...data} />
                </aside>
              </main>
              <Footer />
            </>
          )}
        </>
      }
    </productContext.Provider>
  );
}
