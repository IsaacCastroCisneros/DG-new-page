import React from 'react'

export default function PayTypes({setPayType,payType}) 
{
  const title = payType === 'card' ? 'Pago con Tarjeta Crédito/Débito' : 'Transferencia Bancaria'
  
  return (
    <>
        <h3 className="fw-bolder mob2:text-[1.5rem] text-[1.8rem] mob:text-center">
          {
            title
          }
        </h3>
        <div className="flex gap-[1rem] mt-[1rem] mob:justify-center">
          <button onClick={() => setPayType("card")}
           style={payType==='card'?{border:'2px solid #3F8DFD',borderRadius:'.4rem'}:{border:'2px solid transparent'}}
           >
            <img
              src="https://nuevapagina.s3.amazonaws.com/iconTarjeta.webp"
              alt=""
              className="img-fluid"
            />
          </button>
          <button onClick={() => setPayType("deposito")}
           style={payType==='deposito'?{border:'2px solid #3F8DFD',borderRadius:'.4rem'}:{border:'2px solid transparent'}}
           >
            <img
              src="https://nuevapagina.s3.amazonaws.com/iconBanco.webp"
              alt=""
              className="img-fluid"
            />
          </button>
        </div>
      </>
  )
}
