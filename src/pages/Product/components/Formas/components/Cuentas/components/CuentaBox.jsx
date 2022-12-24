import React from 'react'
import Button from '../../../../../../../components/Button/Button'

export default function CuentaBox(props) 
{ 
  const
  {
    title,
    num,
    img,
    setOkMsg
  }=props

  function toClipBoard(num)
  {
    navigator.clipboard.writeText(num)
    setOkMsg({show:true,msg:title})
  }

  return (
    <div className="flex items-center gap-[1.5rem]">
      <section className="w-[4rem]">
        <img src={img} className="w-[100%]" alt="" />
      </section>
      <section className='flex-[1] flex flex-col items-stretch gap-[.3rem]'>
        <h3>{title}</h3>
        <p>Cuenta Corriente</p>
        <strong>{num}</strong>
        <Button  label={"copiar"} onClick={() => toClipBoard(num)} />
      </section>
    </div>
  );
}
