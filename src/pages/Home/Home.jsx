import React,{useEffect} from 'react'
import HeroHome from './Components/HeroHome/HeroHome'
import Footer from '../../components/Footer/Footer';
import EligeElPrograma from './Components/Main/EligeElPrograma';
import MasDe10 from './Components/MasDe10/MasDe10';
import NuestrosBeneficios from './Components/NuestrosBeneficios/NuestrosBeneficios';
import ProgramaElaborado from './Components/ProgramaElaborado/ProgramaElaborado';
import MyHelmet from '../../components/Helmet/MyHelmet';
import { useContext } from 'react';
import { appContext } from '../../context/AppContext';
import useMyQuery from '../../customHooks/useMyQuery';
import PopUpHome from './Components/PopUpHome/PopUpHome';

export default function Home() 
{
  const{setShowPopUp}=useContext(appContext)
  const{data}=useMyQuery({type:'popUps'})

  useEffect(()=>
  {
    window.scrollTo(0, 0);
  })

  useEffect(()=>
  {
    /* if(data)
    {
      setShowPopUp(prev=>{return{...prev,popUp:<PopUpHome popUps={data}/>,show:true}})
    } */
  },[data])
  
  return (
    <>
      <MyHelmet
        title={"Desarrollo Global | cursos, diplomas y diplomados en gestion publica"}
        content={
          "Desarrollo Global con mas de 11 años mejorando las competencias y capacidades de los servidores públicos y privados. Contamos con la Certificación de calidad ISO 9001-2015."
        }
      />
      <HeroHome />
      <main className="relative z-[99]">
        <EligeElPrograma />
        <NuestrosBeneficios />
        <MasDe10 />
        <ProgramaElaborado />
      </main>
      <Footer />
    </>
  );
}



