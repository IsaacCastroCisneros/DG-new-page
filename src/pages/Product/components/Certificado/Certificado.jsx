import React from 'react'

export default function Certificado() {
  return (
    <div className="flex gap-[1rem] product:flex-col">
      <section className="flex-1">
        Al concluir el programa y aprobar las evaluaciones, de manera opcional
        puede obtener la certificación a nombre del Centro de Capacitación y
        Desarrollo Global. Podrán resolver los examenes a través de nuestra aula
        virtual y evaluará todos los temas dictados en clase. El contenido y
        materiales también se encontrarán disponibles para que puedas estudiar
        sin problemas.
      </section>
      <section className="flex-1">
        <img src="/img/diploma.png" alt="" />
      </section>
    </div>
  );
}
