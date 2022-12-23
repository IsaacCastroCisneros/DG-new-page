import React,{useEffect} from 'react'
import HeroHome from './Components/HeroHome/HeroHome'
import Footer from '../../components/Footer/Footer';
import EligeElPrograma from './Components/Main/EligeElPrograma';
import MasDe10 from './Components/MasDe10/MasDe10';
import NuestrosBeneficios from './Components/NuestrosBeneficios/NuestrosBeneficios';
import ProgramaElaborado from './Components/ProgramaElaborado/ProgramaElaborado';
import MyHelmet from '../../../../PageDesarrolloGlobal/src/components/MyHelmet/MyHelmet';


export default function Home() 
{
  useEffect(()=>
  {
    window.scrollTo(0, 0);
  })
  
  return (
    <>
      {/* <MyHelmet
        title={"Desarrollo Global | Grabados"}
        content={
          "Desarrollo Global con mas de 11 años mejorando las competencias y capacidades de los servidores públicos y privados. Contamos con la Certificación de calidad ISO 9001-2015."
        }
      /> */}
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
