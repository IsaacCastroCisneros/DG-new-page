import React,{useState} from 'react'
import { useContext } from 'react'
import useMyErrList from '../../../../customHooks/useMyErrList'
import { appContext } from '../../../../context/AppContext'
import postRequest from '../../../../helpers/postRequest'
import { login } from '../../../../helpers/validations'
import Button from '../../../Button/Button'
import FormInput from '../../../FormInput/FormInput'
import MyMsg from '../../../MyMsg/MyMsg'
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons'

export default function Login({setShow}) 
{
  const[formData,setFormData]=useState({})
  const[showStatus,setShowStatus]=useState({show:false})
  const{setUser}=useContext(appContext)

  const[errList]=useMyErrList(formData,login)

  function submitting(e)
  {
    e.preventDefault()
    
    if(errList!=='ok')return setShowStatus({show:true,label:"A ocurrido un error valida los datos ingresados"})

    const form = new FormData()
    form.append('correo',formData.email)
    form.append('clave',formData.password)

    postRequest({type:'login',data:form})
    .then(res=>
      {
        if(res===false)return setShowStatus({show:true,label:"Email o contraseña incorrectos"})
        localStorage.setItem('userDG',JSON.stringify(res))
        /* document.cookie = `token=${res.token};domain=.desarrolloglobal.pe`; */
        setUser(res)
        setShowStatus({show:false})
        setShow(false)
      })
  
  }

  return (
    <div className='relative w-[100%]'>
        {showStatus.show && (
          <MyMsg
            icon={faXmarkCircle}
            styles={"!bg-red-500"}
            label={showStatus.label}
          />
        )}
      <div className="w-[100%] flex items-stretch bg-[#fff] rounded-[.5rem] overflow-hidden">
        <section className="flex-1 bg-myPurple py-[4rem] px-[2.5rem] rounded-[.5rem] 826px:hidden">
          <div className="flex justify-start mb-[2rem]">
            <img src="/img/nuevo_logo_blanco.png" className="w-[10rem]" />
          </div>
          <img src="/img/LoginRegistro.webp" className="w-[100%]" />
        </section>
        <section className="flex-1 bg-[#fff] text-[#000] py-[3rem] px-[4.8rem] 826px:px-[2rem]">
          <h1 className="text-[24px] block mb-[1.5rem]">Bienvenido 🙂</h1>
          <strong className="text-[24px]">Iniciar Sesión</strong>
          <p className="mb-[1.5rem]">Ingresa tu email y contraseña</p>
          <form onSubmit={submitting} className="flex flex-col gap-[1rem]">
            <FormInput
              placeHolder={"Correo Electronico"}
              type={"simple"}
              errLabel={errList?.email}
              onChange={(e) =>
                setFormData((prev) => {
                  return { ...prev, email: e.target.value };
                })
              }
            />
            <FormInput
              placeHolder={"Contraseña"}
              type={"simple"}
              errLabel={errList?.password}
              inputType={"password"}
              onChange={(e) =>
                setFormData((prev) => {
                  return { ...prev, password: e.target.value };
                })
              }
            />
            <Button
              label={"Iniciar Sesion"}
              styles={{ button: "w-[100%] mt-[1.5rem] py-[.6rem]" }}
              type={"submit"}
            />
          </form>
        </section>
      </div>
    </div>
  );
}
