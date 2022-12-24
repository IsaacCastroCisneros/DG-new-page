import React from 'react'
import CuentaBox from './components/CuentaBox';

export default function Cuentas() 
{
 /*  const cuentas=
  [
    {
      title:'BANCO DE LA NACION',
      num:'00-015-013982',
      img:'/img/banks/Nacion.webp'
    },
    {
        title:'BCP',
        num:'193-19452390-77',
        img:'/img/banks/Bcp.webp'
    },
    {
        title:'SCOTIABANK',
        num:'193-19452390-77',
        img:'/img/banks/Bcp.webp'
    },

    ,
    '027-7544565',
    '011-303500069-3',
    '04-074-875926',
    '193-94612138-0-14',
    '0011-0153-02-00460394',
  ] */

  return (
    <div className="px-[2rem] py-[1.6rem] bg-[#fff] rounded-[.5rem]">
      <h1 className='text-[1.5rem]'>Pagos por Transferencias y/o deposito</h1>
      <p>
       Puedes pagar con tarjeta de credito o debito, deposito o transferencia.
      </p>
       <CuentaBox
        num={'looooooool'}
        />
    </div>
  );
}
