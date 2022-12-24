import React,{useState} from 'react'
import CuentaBox from './components/CuentaBox';

export default function Cuentas() 
{
  const[okMsg,setOkMsg]=useState({show:false,msg:''})

  const cuentas=
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
      img:'/img/banks/Scotiabank.webp'
    },
    {
      title:'INTERBANK',
      num:'011-303500069-3',
      img:'/img/banks/Interbank.webp'
    },
    {
      title:'BANCO DE LA NACION',
      num:'04-074-875926',
      img:'/img/banks/Nacion.webp'
    },
    {
      title:'BBVA',
      num:'193-94612138-0-14',
      img:'/img/banks/Bbva.webp'
    },
    {
      title:'BCP',
      num:'0011-0153-02-00460394',
      img:'/img/banks/Bcp.webp'
    }
  ]

  return (
    <div className="w-[70rem] max-w-[100%] px-[2rem] py-[1.6rem] bg-[#fff] rounded-[.5rem]">
      <h1 className="text-[1.5rem] block mb-[1rem]">
        Pagos por Transferencias y/o deposito
      </h1>
      <p className="block mb-[2rem]">
        Puedes pagar con tarjeta de credito o debito, deposito o transferencia.
      </p>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-[2rem]">
        {okMsg.show && (
          <span className="py-[.5rem] px-[.8rem] font-bold bg-green-500 absolute top-0 translate-y-[-50%] border-[1px] border-[#fff] rounded-[.5rem] text-[#fff] left-[50%] translate-x-[-50%]">
            Cuenta {okMsg.msg} Copiada con exito!! 
          </span>
        )}
        {cuentas.map((cue) => {
          return <CuentaBox setOkMsg={setOkMsg} {...cue} />;
        })}
      </div>
    </div>
  );
}
