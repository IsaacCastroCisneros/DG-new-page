import React, { useState } from 'react'
import useMyQuery from '../../../../../../customHooks/useMyQuery'
import Card from '../Card/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedal,faBook, faGraduationCap,faMousePointer } from '@fortawesome/free-solid-svg-icons'
import Spinner from '../../../../../../components/Spinner/Spinner'
import LinkButton from '../../../../../../components/LinkButton/LinkButton'

export default function Results() 
{
  const[type,setType]=useState('cursos')
  let{data,isFetching}= useMyQuery({type,limit:'limit=6'})
  
  const all=['cursos','diplomas','diplomados']

  const{data:cursos}= useMyQuery({type:all[0]})
  const{data:diplomas}= useMyQuery({type:all[1]})
  const{data:diplomados}= useMyQuery({type:all[2]})

  if(type==='todos')
  {
    data=[...cursos,...diplomas,...diplomados]
  }

  return (
    <>
      <div className="flex justify-center gap-[1rem] mb-[4rem] phone:mb-[1.3rem] elige:grid elige:grid-cols-[repeat(2,50%)] elige:gap-[.5rem]">
        <ButtonType
          setType={setType}
          selected={type}
          label={"todos"}
          icon={<FontAwesomeIcon icon={faMousePointer} />}
        />
        <ButtonType
          setType={setType}
          selected={type}
          label={"cursos"}
          icon={<FontAwesomeIcon icon={faBook} />}
        />
        <ButtonType
          setType={setType}
          selected={type}
          label={"diplomas"}
          icon={<FontAwesomeIcon icon={faMedal} />}
        />
        <ButtonType
          setType={setType}
          selected={type}
          label={"diplomados"}
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
        />
      </div>
      {isFetching && <Spinner />}
      {!isFetching && (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(17.3rem,1fr))] gap-[2.5rem] px-[3rem] phone:px-[0] mb-[5rem]">
          {data?.map((card) => {
            return <Card key={card.id} type={type} {...card} />;
          })}
        </div>
      )}
      {type !== "todos" && (
        <div className="flex justify-center">
          <LinkButton
            label={`Ver Mas ${type}`}
            path={`/${type}`}
            styles={{ button: "!max-w-[20rem]" }}
          />
        </div>
      )}
    </>
  );
}

function ButtonType(props) 
{
  const
  {
    setType,
    label,
    selected,
    icon
  }=props

  const isSelected=label===selected

  return (
    <button
      className={`bg-myGrey block px-[1rem] phone:px-[.8rem] py-[.4rem] rounded-md shadow-lg ${
        isSelected ? "!bg-myBlack" : ""
      } transition-all duration-200`}
      onClick={() => {
        setType(label)
      } }
    >
      <p
        className={`text-myBlack text-[1.3rem] flex gap-[1rem] phone:text-[.9rem] phone:gap-[.5rem] leading-relaxed uppercase transition-all duration-200 ${
          isSelected ? "!text-[#fff]" : ""
        }`}
      >
        <span>{icon}</span>
        <span>{label}</span>
      </p>
    </button>
  );
}
  