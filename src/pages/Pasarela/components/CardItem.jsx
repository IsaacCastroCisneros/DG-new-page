import React from 'react'

export default function CardItem(props) 
{
  const
  {
    titulo,
    imagen,
    tipo,
    tipo_clase,
    inicio
  }=props

  return (
    <div className='p-[1rem] mb-[1rem] bg-[#fff] flex flex-col gap-[.5rem] shadow-xl rounded-[.4rem]'>
      <img src={imagen} alt="" className="img-fluid rounded-[.5rem]" />
      <p className="fw-bolder text-danger"><span className='capitalize'>{tipo}</span> {tipo_clase}</p>
      <h6 className="fw-bolder">
        {titulo}
      </h6>
      <div className="border border-1 border-primary rounded p-1 w-100">
        <p className="m-0 text-primary">Inicio: {inicio}</p>
      </div>
    </div>
  );
}
