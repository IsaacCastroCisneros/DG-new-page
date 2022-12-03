import React from 'react'

export default function NuestrosBeneficios() 
{
  return (
    <div className="bg-myPurple">
      <div className="custom-container">
        <div className="px-[8rem] py-[7.5rem] flex">
          <div className="flex-[1.5]">
            <img src="/img/guy.png" className="w-[100%]" alt="" />
          </div>
          <section className="text-[#fff] flex-[3] pl-[7rem]">
            <h1 className="font-bold text-[50px] mb-[1rem]">
              Nuestros Beneficios
            </h1>
            <p className="text-[18px] mb-[3.5rem]">
              Aprende con nuestras Clases Virtuales en vivo Clases Virtuales
              24/7 desde cualquier lugar del Perú solo con una PC conectada a
              internet.
            </p>
            <div className='grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-x-[10rem] gap-y-[4rem]'>
              <NuestroBox  title={'Videoclases 100% online'} subTitle={'Disponibles 24/7.'}/>
              <NuestroBox  title={'Profesores Expertos'} subTitle={'Especialistas con amplia experiencia en cada tema.'}/>
              <NuestroBox  title={'Certificación (*)'} subTitle={'Certificado digital válida para concursos.'}/>
              <NuestroBox  title={'Materiales y evaluaciones'} subTitle={'Desde plataforma'}/>
              <NuestroBox  title={'Soporte'} subTitle={'Atención personalizada para acceder a tus clases.'}/>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function NuestroBox({title,subTitle}) 
{
    return (
      <div>
        <div>
          <img src="/" alt="" />
        </div>
        <p className="flex flex-col text-[20px]">
          <strong>{title}</strong>
          <span>{subTitle}</span>
        </p>
      </div>
    );
}
  