import React from 'react'

export default function Selector(props) 
{
    const
    {
      cursos,
      diplomas,
      diplomados,
      onChange,
    }=props

    return(
        <select className="block w-[100%] border-[1px] border-gray-300 rounded-[.2rem] px-[.7rem] py-[.8rem] focus:border-myPurple focus:outline-none" 
         onChange={onChange}
         >
            <option value="no-value">Elegir Programa</option>
            <option value="no-value">CURSOS:</option>
            {
              cursos?.map(cur=>
                {
                    return (
                      <option
                        value={cur.titulo}
                      >
                        {cur.titulo}
                      </option>
                    );
                })
            }
            <option value="no-value">DIPLOMAS:</option>
            {
              diplomas?.map(dip=>
                {
                    return (
                      <option
                        value={dip.titulo}
                      >
                        {dip.titulo}
                      </option>
                    );
                })
            }
            <option value="no-value">DIPLOMADOS:</option>
            {
              diplomados?.map(diplo=>
                {
                    return (
                      <option
                        value={diplo.titulo}
                      >
                        {diplo.titulo}
                      </option>
                    );
                })
            }
        </select>
    )
}
