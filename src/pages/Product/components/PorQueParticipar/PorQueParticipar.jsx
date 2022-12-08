import React from 'react'

export default function PorQueParticipar({tipo}) 
{
  return (
    <div className="shadow-xl bg-bgCard px-[2.2rem] py-[2rem] rounded-[.5rem] mb-[1.5rem]">
      <section className="block w-[100%]">
        <h1 className="text-[26px]">¿Porque Participar en este {tipo}?</h1>
        <span className="border-b-[3px] border-blue-500 w-[20%] block my-[1rem]"></span>
      </section>
      <p className="text-[20px]">
        Este Diploma busca potenciar tus conocimientos y habilidades para
        afrontar el Proceso de Certificación y renovación de Certificación ante
        el OSCE, desarrollando las competencias requeridas en la matriz
        propuesta por OSCE. Y esta dirigido a todos los profesionales y técnicos
        relacionados al órgano encargado de las Contrataciones de las Entidades
        Públicas interesados en obtener o renovar la Certificación ante OSCE,
        así como a los interesados en aspirar a un puesto en el mismo; y al
        público en general.
      </p>
    </div>
  );
}
