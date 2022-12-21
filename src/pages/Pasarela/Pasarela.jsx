import React from 'react'
import PasarelaForm from './components/PasarelaForm/PasarelaForm';

export default function Pasarela() 
{
  return (
    <main className="bg-[#f9fbfc] h-[100%] pt-[2rem] pb-[5rem]">
      <div className="custom-container3 926px:!px-[1rem]">
        <h1 className="text-[#000] text-[1.5rem] mb-[1.5rem]">Detalles</h1>
        <div>
          <PasarelaForm />
        </div>
      </div>
    </main>
  );
}
