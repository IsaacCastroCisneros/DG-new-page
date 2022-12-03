import React from 'react'

export default function Precio({precio}) 
{
  return (
    <p className="flex flex-col items-end">
      <strong className="text-red-500 text-[1.5rem]">
        S/
        {Number(precio.final).toFixed(2)}
      </strong>
      <span className="text-gray-400 font-medium line-through">
        antes: S/{Number(precio.normal).toFixed(2)}
      </span>
    </p>
  );
}
