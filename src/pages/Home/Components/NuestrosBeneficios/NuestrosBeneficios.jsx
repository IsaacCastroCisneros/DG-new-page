import React from 'react'

export default function NuestrosBeneficios() 
{
  return (
    <div className="bg-myPurple">
      <div className="custom-container">
        <div className="px-[8rem] py-[7.5rem] flex nuestro:py-[4rem] nuestro:px-[0]">
          <div className="flex-[1.5] nuestro:hidden">
            <img src="/img/guy.png" className="w-[100%]" alt="" />
          </div>
          <section className="text-[#fff] flex-[3] pl-[7rem] nuestro:pl-[0]">
            <h1 className="font-bold text-[50px] mb-[1rem] phone:text-[2rem]">
              Nuestros Beneficios
            </h1>
            <p className="text-[18px] mb-[3.5rem] phone:text-[18px]">
              Aprende con nuestras Clases Virtuales en vivo Clases Virtuales
              24/7 desde cualquier lugar del Perú solo con una PC conectada a
              internet.
            </p>
            <div className='grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-x-[10rem] gap-y-[4rem]'>
              <NuestroBox  title={'Videoclases 100% online'} subTitle={'Disponibles 24/7.'} img={"/img/beni-icons/play.png"} />
              <NuestroBox  title={'Profesores Expertos'} subTitle={'Especialistas con amplia experiencia en cada tema.'} img={"/img/beni-icons/presentation.png"} />
              <NuestroBox  title={'Certificación (*)'} subTitle={'Certificado digital válida para concursos.'} img={"/img/beni-icons/dip.png"} />
              <NuestroBox  title={'Materiales y evaluaciones'} subTitle={'Desde plataforma'} img={"/img/beni-icons/exam.png"} />
              <NuestroBox  title={'Plataforma Premium'} subTitle={'Acceso por 1 año a las clases compradas.'} img={"/img/beni-icons/lap.png"} />
              <NuestroBox  title={'Soporte'} subTitle={'Atención personalizada para acceder a tus clases.'} img={"/img/beni-icons/support (1).png"} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function NuestroBox({title,subTitle,img}) 
{
    return (
      <div className='flex gap-[1rem] items-center'>
        <div className='w-[43px]'>
          <img src={img} className='w-[100%]' alt="" />
        </div>
        <p className="flex-1 flex-col text-[20px]">
          <strong>{title}</strong>
          <span>{subTitle}</span>
        </p>
      </div>
    );
}
  