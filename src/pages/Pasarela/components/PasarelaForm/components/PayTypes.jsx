import React from 'react'

export default function PayTypes({setPayType,payType}) 
{
  const title = payType === 'card' ? 'Pago con Tarjeta Crédito/Débito' : 'Transferencia Bancaria'
  
  return (
    <>
        <h3 className="fw-bolder 926px:text-[1.3rem] text-[1.8rem] 926px:text-center">
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
