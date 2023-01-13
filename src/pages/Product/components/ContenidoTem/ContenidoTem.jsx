import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown,faBars } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { useState } from 'react';
import { myGradientNoHover } from '../../../../MyStyles/MyStyles';
import { useRef } from 'react';

export default function ContenidoTem(props) 
{
  const
  {
     sesiones,
     tipo,
     cursos,
     id
  }=props

  return (
    <div className='overflow-hidden rounded-[1rem] shadow-xl mb-[1.5rem]'>
      <strong className={`block px-[2.5rem] py-[1.3rem] ${myGradientNoHover} hover text-[26px] product:text-[20px]`}>Contenido Temático</strong>
      {
        tipo==='curso'&&
        <AccordionList sesiones={sesiones}/>
      }
      {
        tipo!=='curso'&&
        <div className='pt-[1.5rem] pb-[1.2rem] px-[1rem] flex flex-col gap-[1rem]'>
          {
            cursos?.map(curso=>
                {
                    return (
                      <CursoTem  key={curso.id} {...curso}/>
                    );
                })
          }
        </div>
      }
    </div>
  );
}

function AccordionList({sesiones})
{
  const[show,setShow]=useState({show:false,isSelected:0})

  return (
    <div className='pt-[1.5rem] pb-[1.2rem] px-[1rem] flex flex-col gap-[.5rem]' >    
      {sesiones?.map((sesion) => {
        return <Accordion key={sesion.id} sesion={sesion} show={show} setShow={setShow} />;
      })}
    </div>
  );
}

function CursoTem(props)
{
  const[show,setShow]=useState(false)

  const
  {
    icono,
    titulo,
    sesiones
  }=props

  const icon = show ? "/img/minus.png" : "/img/plus.png"

  return (
    <div className="bg-[#fafafa] px-[2.3rem] product:px-[1.8rem] py-[1rem] shadow-lg">
      <button className="flex items-center gap-[2rem] text-left w-[100%] justify-between"
       onClick={()=>setShow(prev=>!prev)}
       >
        <div className="h-[97px] product:hidden">
          <img src={icono} className="h-[100%]" alt="" />
        </div>
        <section className="flex-1 flex flex-col text-[20px] font-medium">
          <span className=" underline">Curso:</span>
          <p title={titulo} >{titulo}</p>
          <span className="text-[16px]">{sesiones.length} clases en vivo</span>
        </section>
        <img src={icon} className="w-[15px]" alt="" />
      </button>
      <div className='pl-[8rem] product:pl-[0rem]'>
         {
           show&&sesiones?.map(sesion=>
                {
                    return(
                        <AccordionTem {...sesion} />
                    )
                })
         }
      </div>
    </div>
  );
}

function AccordionTem(props)
{
    const
    {
      sub_titulo,
      titulo
    }=props
  /* fdf */
    return (
      <div className='py-[1rem] border-b-[1px] border-gray-300'>
        <button className="flex justify-between w-[100%] hover:text-[#1839a4]">
          <span className="flex items-center gap-[1rem]">
            <div className='flex gap-[1rem] items-center justify-between'>
              <FontAwesomeIcon icon={faBars} />
              <p className='product:hidden'>{titulo}:</p>
            </div>
            <p className="overflow-hidden whitespace-nowrap text-ellipsis max-w-[353px] product:max-w-[auto] product:whitespace-normal product:text-left product:mr-[.5rem]"
              title={sub_titulo}
             >
              {sub_titulo}
            </p>
          </span>
          <span>
            <FontAwesomeIcon icon={faChevronDown} />
          </span>
        </button>
      </div>
    );
}


function Accordion({ sesion,setShow,show }) 
{
  const divH = useRef()

  function getH()
  {
    return divH.current.offsetHeight
  }

  let isShow = sesion.id===show.isSelected

  return (
    <div
      className="overflow-hidden transition-all duration-[150ms]"
      style={{height: `${55.98+(show.show&&isShow ? getH():0)}px`}}
    >
      <button
        className="bg-[#f5f5f5] w-[100%] text-left p-[1rem] flex justify-between"
        onClick={() => setShow(prev=>{return{show:prev.isSelected===sesion.id ? !prev.show:true ,isSelected:sesion.id}})}
      >
        <strong>
          <span className=" text-[#363535]">{sesion.titulo}</span>
          <span className="text-myGrey2 font-medium">
            : {sesion.sub_titulo}
          </span>
        </strong>
        <span className={`${show.show&&isShow ? "rotate-180" : ""} transition-all duration-150`}>
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </button>
      <div
        className="session-list bg-[#fafafa] py-[1.3rem] px-[3rem]"
        ref={divH}
        dangerouslySetInnerHTML={{
          __html: sesion.descripcion,
        }}
      ></div>
    </div>
  );
}
  