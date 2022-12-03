import React, { useState } from 'react'
import useMyQuery from '../../../../../../customHooks/useMyQuery/useMyQuery'
import {MoonLoader} from 'react-spinners'
import Card from '../Card/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedal,faBook, faGraduationCap } from '@fortawesome/free-solid-svg-icons'

export default function Results() 
{
  const[type,setType]=useState('cursos')
  const{data,isFetching}= useMyQuery({type,limit:'limit=6'})

  return (
    <>
      <div className="flex justify-center gap-[1rem] mb-[4rem]">
        <ButtonType 
          setType={setType} 
          selected={type} 
          label={"cursos"}
          icon={<FontAwesomeIcon icon={faBook}/>} 
          />
        <ButtonType 
          setType={setType} 
          selected={type} 
          label={"diplomas"}
          icon={<FontAwesomeIcon icon={faMedal}/>} 
          />
        <ButtonType 
          setType={setType} 
          selected={type} 
          label={"diplomados"}
          icon={<FontAwesomeIcon icon={faGraduationCap}/>} 
          />
      </div>
      {
        <div className="flex justify-center text-blue-400 mb-[1rem]">
          {isFetching && (
            <MoonLoader size={100} color={"rgb(96,165,250)"} />
          )}
        </div>
      }
      {
        !isFetching&&
        <div className="grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-[2.5rem] px-[3rem]">
          {data?.envivo.map((card) => {
            return <Card key={card.id} type={type} {...card} />;
          })}
        </div>
      }
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
      className={`bg-myGrey block px-[1rem] py-[.4rem] rounded-md shadow-lg ${
        isSelected ? "!bg-myBlack" : ""
      } transition-all duration-200`}
      onClick={() => setType(label)}
    >
      <p
        className={`text-myBlack text-[1.3rem] flex gap-[1rem] leading-relaxed uppercase transition-all duration-200 ${
          isSelected ? "!text-[#fff]" : ""
        }`}
      >
        <span>{icon}</span>
        <span>{label}</span>
      </p>
    </button>
  );
}
  