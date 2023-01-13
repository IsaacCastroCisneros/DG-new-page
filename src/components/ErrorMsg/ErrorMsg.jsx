import React from 'react'

export default function ErrorMsg() 
{
  return (
    <div className="flex justify-center">
      <span className="text-center question7:text-[1rem] text-[1.5rem] bg-red-400 rounded-[2rem] text-[#fff] px-[1rem] py-[.3rem] inline-block">
        ⚠️ Algo salio mal, vuelve a recargar la pagina ⚠️
      </span>
    </div>
  );
}
