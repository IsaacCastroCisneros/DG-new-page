import React from 'react'
import ErrFormMsg from '../../../../../../../components/FormInput/components/ErrFormMsg';
import OkFormMsg from '../../../../../../../components/FormInput/components/OkFormMsg';

export default function Selector(props) 
{
    const
    {
      cursos,
      diplomas,
      diplomados,
      onChange,
      errLabel
    }=props

    return (
      <div className='relative'>
        <select
          className="block w-[100%] border-[1px] border-gray-300 rounded-[.2rem] px-[.7rem] py-[.8rem] focus:border-myPurple focus:outline-none"
          onChange={onChange}
        >
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
        </select>
        {errLabel && <ErrFormMsg errLabel={errLabel} />}
        {!errLabel && <OkFormMsg styles={"!top-0 !right-[.4rem]"} />}
      </div>
    );
}
