import React,{useState} from 'react'
import KRGlue from '@lyracom/embedded-form-glue'
import { useEffect } from 'react'
import { useContext } from 'react'
import { appContext } from '../../../../../context/AppContext'
import axios from 'axios'
import Izi from './Izi'
import PayTypes from './PayTypes'
import DepositoForm from './DepositoForm'
import LoadFormMsg from './LoadFormMsg'

export default function IziForm({setShowSuccess}) 
{
  const{cart,user,setCart}=useContext(appContext)
  const[load,setLoad]=useState(false)
  const[payType,setPayType]=useState('card')

  useEffect(()=>
  {
    izi()
  },[payType])

  function izi()
  {
    const formData = new FormData()
  
    const productsArr = cart.map(pro=>{return {id:pro.id,tipo:pro.tipo}})
    const prices = cart.map(pro=>{return pro.price})
    const amount = prices.reduce((sum,current)=>
    {
      return sum + current
    },0)

    formData.append("amount",amount)
    formData.append("idUser",user.id)
    formData.append("productsArr", JSON.stringify(productsArr));

    const endpoint = 'https://api.micuentaweb.pe'
    const publicKey = '97649007:publickey_7BLQcvuVTHjNDjzzSmiyJM8VnfXpfQX9Li995qHar6NyA'
    let formToken = ''

      axios
        .post(
          "https://aula.desarrolloglobal.pe/v03/api/pasarela/generar-token",
          formData
        )
        .then((resp) => {
          formToken = resp.data.token;
          setLoad(true)
          return KRGlue.loadLibrary(
            endpoint,
            publicKey
          ); 
        })
        .then(({ KR }) =>
          KR.setFormConfig({
            formToken: formToken,
            "kr-language": "en-US" 
          })
        )
        .then(({ KR }) =>
          KR.onSubmit((paymentData) => {

            paymentData.pago= {idUser:user.id,productsArr}

            axios
              .post("https://aula.desarrolloglobal.pe/v03/api/pasarela/pago", paymentData)
              .then((response) => {
                if (response.status)
                {
                  setShowSuccess('success')
                  setCart([])
                  localStorage.removeItem('cart')
                }
              });
            return false; 
          })
        ) // Custom payment callback
        .then(({ KR }) =>
          KR.attachForm('#myPaymentForm')
        ) /* add a payment form  to myPaymentForm div*/
        .then(({ KR, result }) =>
          KR.showForm(result.formId)
        ) /* show the payment form */
        .catch((error) =>console.log(error));
  }

  return (
    <>
      <PayTypes setPayType={setPayType} payType={payType}/>
      <div className="flex justify-between items-center 926px:flex-col 926px:items-start">
        <span className="block mt-[1rem] text-[12.5px]">
          Recuerda activar tu tarjeta para compras por internet
        </span>
        <LoadFormMsg/>
      </div>
      {
        !load&&
        <strong className='block text-center mt-[1rem]'>
           Cargando..
        </strong>
      }
      {
        payType==='card'&&load&&
        <Izi/>
      }
      {
        payType==='deposito'&&
        <DepositoForm products={cart} />
      }
    </>
  );
}