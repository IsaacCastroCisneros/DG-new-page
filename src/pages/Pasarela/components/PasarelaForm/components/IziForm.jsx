import React,{useState} from 'react'
import KRGlue from '@lyracom/embedded-form-glue'
import { useEffect } from 'react'
import { useContext } from 'react'
import { appContext } from '../../../../../context/AppContext'
import axios from 'axios'
import Izi from './Izi'

export default function IziForm() 
{
  const{cart,user,setCart}=useContext(appContext)
  const[alert,setAlert]=useState(undefined)

  useEffect(()=>
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
    console.log(productsArr)

    /* 97649007:testpublickey_UTZAMW5mLnK026AEknrEn6L7WODbX2AllfyAycTISdiUX  */
    const endpoint = 'https://api.micuentaweb.pe'
    const publicKey = '97649007:testpublickey_UTZAMW5mLnK026AEknrEn6L7WODbX2AllfyAycTISdiUX'
    let formToken = ''

      axios
        .post(
          "https://aula.desarrolloglobal.pe/v03/api/pasarela/generar-token",
          formData
        )
        .then((resp) => {
          formToken = resp.data.token;
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
                  setAlert('success')
                  console.log('hey xd')
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
        .catch((error) => setAlert(error));

  })

  return (
    <Izi/>
  );
}
