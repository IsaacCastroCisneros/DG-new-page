import React from 'react'
import LinkButton from '../../../../../../components/LinkButton/LinkButton'
import Span100 from './components/Span100'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags,faClock,faCalendarDays,faMedal } from '@fortawesome/free-solid-svg-icons'
import Row from './components/Row'
import CertificacionDisponible from './components/CertificacionDsiponible'
import Precio from './components/Precio'

export default function Card(props) 
{
  const
  {
    imagen,
    titulo,
    tipo,
    inicio,
    sesiones,
    precio,
    etiqueta
  }=props


  return (
    <div className="rounded-[.5rem] overflow-hidden shadow-lg flex flex-col">
      <section className="block">
        <img src={imagen} className="w-[100%]" alt="" />
      </section>
      <section className="p-[2rem] flex flex-col relative flex-1">
        <Span100 type={tipo} />
        <h3 className="text-myPurple text-center text-[1.2rem] mb-[1rem] phone:text-[18px]">
          {titulo}
        </h3>
        <CertificacionDisponible icon={faMedal} />
        <div className="flex flex-col flex-1 justify-end">
          <LinkButton
            label="más información"
            path={`/${tipo}/${etiqueta}`}
            styles={{
              button:
                "!w-[100%] !bg-myPurpleBg !py-[.5rem] !font-medium !mb-[1.2rem]",
              span: "!text-[1.1rem]",
            }}
          />
          <div className="flex justify-between">
            <section>
              <Row icon={faCalendarDays} text={inicio} label="Inicio: " />
              {
                tipo==='curso'&&
                <Row
                  icon={faClock}
                  text={`${sesiones?.length} sesionens en video`}
                />
              }
            </section>
            <section className="flex items-start self-end gap-[.5rem]">
              <span className="text-myPurple scale-x-[-1] text-[1.3rem] phone:text-[21px]">
                <FontAwesomeIcon icon={faTags} />
              </span>
              <Precio precio={precio} />
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

        