import React from 'react'
import HeroHome from './Components/HeroHome/HeroHome'
import Footer from '../../Components/Footer/Footer';
import EligeElPrograma from './Components/Main/EligeElPrograma';
import MasDe10 from './Components/MasDe10/MasDe10';
import NuestrosBeneficios from './Components/NuestrosBeneficios/NuestrosBeneficios';
import ProgramaElaborado from './Components/ProgramaElaborado/ProgramaElaborado';


export default function Home() {
  return (
    <>
      <HeroHome />
      <main className='relative z-[99]'>
       <EligeElPrograma/>
       <NuestrosBeneficios/>
       <MasDe10/>
       <ProgramaElaborado/>
      </main>
      <Footer/>
    </>
  );
}
