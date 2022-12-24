import React from 'react'
import Button from '../../../../../../../components/Button/Button'

export default function CuentaBox(props) 
{ 
  const
  {
    title,
    num,
    img
  }=props

  function toClipBoard(num)
  {
    navigator.clipboard.writeText(num)
  }

  return (
    <div>
       <section>
           
       </section>
       <section>
          <h3>
            {title}
          </h3>
          <p>
            Cuenta Corriente
          </p>
          <strong>
            {num}
          </strong>
          <Button
           label={"copiar"}
           onClick={()=>toClipBoard(num)}
           />
       </section>
    </div>
  )
}
