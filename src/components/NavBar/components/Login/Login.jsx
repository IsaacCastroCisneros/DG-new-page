import React,{useState} from 'react'
import { useContext } from 'react'
import { appContext } from '../../../../context/AppContext'
import postRequest from '../../../../helpers/postRequest'
import Button from '../../../Button/Button'
import FormInput from '../../../FormInput/FormInput'

export default function SignUp() 
{
  const[formData,setFormData]=useState({})
  const{setUser}=useContext(appContext)


  function submitting(e)
  {
    e.preventDefault()
    
    const form = new FormData()
    form.append('correo',formData.email)
    form.append('clave',formData.password)

    postRequest({type:'login',data:form})
    .then(res=>
      {
        if(res===false)return
        localStorage.setItem('userDG',JSON.stringify(res))
        /* document.cookie = `token=${res.token};domain=.desarrolloglobal.pe`; */
        setUser(res)
      })
  
  }

  return (
    <div className='w-[70rem] max-w-[100%] flex items-stretch'>
       <section className='flex-1 bg-[#0d6efd] py-[4rem] px-[2.5rem]'>
        <div className='flex justify-start mb-[2rem]'>
          <img src="/img/nuevo_logo_blanco.png" className='w-[10rem]' />
        </div>
          <img src="/img/LoginRegistro.webp" className='w-[100%]'  />
       </section>
       <section className='flex-1 bg-[#fff]'>
        <form 
         onSubmit={submitting}
         >
          <FormInput 
           placeHolder={'Correo Electronico'} 
           type={'simple'} 
           onChange={(e)=>setFormData(prev=>{ return{...prev,email:e.target.value}})}
           />
          <FormInput 
           placeHolder={'Contraseña'} 
           type={'simple'} 
           onChange={(e)=>setFormData(prev=>{ return{...prev,password:e.target.value}})}
           />
           <Button
            label={'Entrar'}
            type={'submit'}
            />
        </form>
       </section>
    </div>
  )
}
