import React from 'react'
import BeniBox from '../../../../components/BeniBox/BeniBox'


export default function Beneficios() 
{
  return (
    <div className='grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-x-[6rem] gap-y-[1rem]'>
       <BeniBox  title={'Videoclases 100% online'} subTitle={'Disponibles 24/7.'} img={"/img/icons/play.png"} />
       <BeniBox  title={'Profesores Expertos'} subTitle={'Especialistas con amplia experiencia en cada tema.'} img={"/img/icons/presentation.png"} />
       <BeniBox  title={'Certificación (*)'} subTitle={'Certificado digital válida para concursos.'} img={"/img/icons/dip2.png"} />
       <BeniBox  title={'Materiales y evaluaciones'} subTitle={'Desde plataforma'} img={"/img/icons/exam.png"} />
       <BeniBox  title={'Plataforma Premium'} subTitle={'Acceso por 1 año a las clases compradas.'} img={"/img/icons/lap.png"} />
       <BeniBox  title={'Soporte'} subTitle={'Atención personalizada para acceder a tus clases.'} img={"/img/icons/support.png"} />
    </div>
  )
}

