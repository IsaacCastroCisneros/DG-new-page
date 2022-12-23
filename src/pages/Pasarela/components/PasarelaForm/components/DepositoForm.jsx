import React from 'react'

export default function DepositoForm({products})
{
  const productsArr = products.map((entry) => {
    return entry.name;
  });
  const productsStr = productsArr.join(" | ");

  function WpButton() {
    return (
      <a
        className="bg-[#16c121] inline-flex px-[2rem] py-[.8rem] mob:px-[1rem] items-center rounded-[.5rem] gap-[1rem] mob:gap-[.5rem]"
        href={`https://api.whatsapp.com/send?phone=51987756735&text=Hola quisiera comprar los programas:${productsStr}`}
        target={"_blank"}
      >
        <img
          src="/img/whats.png"
          className="w-[33px] h-[33px] mob:w-[20px] mob:h-[20px]"
          alt=""
        />
        <strong className="text-[#fff] mob:text-[.8rem]">Ayuda con el pago por WhatsApp</strong>
      </a>
    );
  }

  function BankCard({img,nacion=false}) 
  {
    return (
      <div className="flex w-[100%] justify between gap-[1rem] mb-[2rem]">
        <div className="flex w-[62px] h-[62px] rounded-[100%] overflow-hidden justify-center items-center bg-[#002a8d]"
         style={nacion?{backgroundColor:'#fff'}:{}}
         >
          {img}
        </div>
        <p className="flex flex-col flex-[1]">
          <span className="text-[14px]">Cuenta Corriente Soles</span>
          <strong className="text-[18px]">N° 00-015-013982</strong>
        </p>
      </div>
    );
  }

  return (
    <div className="mt-[2.5rem] relative z-[999]">
      <h3 className="text-[18px] font-medium mb-[1rem]">
        Tarjeta de Crédito / Débito
      </h3>
      <p className="mb-[2rem] text-[14px]">
        Puedes realizar depósitos a nuestras cuentas bancarias y enviarnos el
        voucher de deposito o el reporte de transferencia por whatsap 987756735
        o al correo asesoría@desarrolloglobal.pe
      </p>
      <h3 className="text-[18px] font-medium mb-[1.5rem]">
        Titular: Centro de Capacitación y Desarrollo Global EIRL
      </h3>
      <div className="flex mob:flex-col justify-center">
        <BankCard nacion={true} img={<img src="/img/nacion.png" className="w-[90%]"></img>}/>
        <BankCard img={<img src="/img/bcp.png" className="w-[90%]"></img>}/>
      </div>
      <span className="mb-[1rem] block">Necesitas ayuda para realizar tu pago por transferencia</span>
      <WpButton />
    </div>
  );
}
