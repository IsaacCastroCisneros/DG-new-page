import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp,faSortDown } from '@fortawesome/free-solid-svg-icons';
import ErrFormMsg from '../../../../../../../components/FormInput/components/ErrFormMsg';
import OkFormMsg from '../../../../../../../components/FormInput/components/OkFormMsg';
import MobSelector from './MobSelector';

export default function Selector(props) 
{
    const
    {
      cursos,
      diplomas,
      diplomados,
      onChange,
      errLabel,
      value
    }=props

    const[show,setShow]=useState(false)

    const myStyles = 'block w-[100%] border-[1px] border-gray-300 rounded-[.2rem] px-[.7rem] py-[.8rem] focus:border-myPurple focus:outline-none'

    function selectorContent()
    {
      return (
        <>
          <option value="">Elegir Programa</option>
          <option value="">CURSOS:</option>
          {cursos?.map((cur) => {
            return <option value={cur.id}>{cur.titulo}</option>;
          })}
          <option value="">DIPLOMAS:</option>
          {diplomas?.map((dip) => {
            return <option value={dip.id}>{dip.titulo}</option>;
          })}
          <option value="">DIPLOMADOS:</option>
          {diplomados?.map((diplo) => {
            return <option value={diplo.id}>{diplo.titulo}</option>;
          })}
        </>
      );
    }

    return (
      <>
        <MobSelector
          show={show}
          setShow={setShow}
          cursos={cursos}
          diplomas={diplomas}
          diplomados={diplomados}
          onChange={onChange}
          checkedOne={value.id}
        />
        <div className="relative">
          <select className={`${myStyles} mob:hidden`} onChange={onChange}>
            {selectorContent()}
          </select>
          {errLabel && <ErrFormMsg errLabel={errLabel} />}
          {!errLabel && <OkFormMsg styles={"!top-0 !right-[.4rem]"} />}
          <div
            className={`${myStyles} hidden mob:flex justify-between hover:cursor-pointer`}
            title={value.titulo}
            onClick={() => setShow(true)}
          >
           <p className='inline-flex items-center w-[95%] select-none'>
             <span className='w-[100%] whitespace-nowrap overflow-hidden text-ellipsis block'>
              {
                (value==='no-value'||value==='')&&
                <>
                  Elegir Programa
                </>
              }
              {
                value.titulo
              }
             </span>
           </p>
            <div className=' flex flex-col justify-center items-center'>
               <FontAwesomeIcon className='relative top-[.4rem]' icon={faSortUp} />
               <FontAwesomeIcon className='relative bottom-[.4rem]' icon={faSortDown} />
            </div>
          </div>
        </div>
      </>
    );
}
