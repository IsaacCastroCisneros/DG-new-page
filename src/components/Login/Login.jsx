import React,{useState} from 'react'
import { useContext } from 'react'
import useMyErrList from '../../customHooks/useMyErrList'
import { appContext } from '../../context/AppContext'
import postRequest from '../../helpers/postRequest'
import { login } from '../../helpers/validations'
import MyForm from '../MyForm/MyForm'
import MyLogin from '../MyLogin/MyLogin'

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
        document.cookie = `token=${res.token};domain=.desarrolloglobal.pe`;
        setUser(res)
        setShowStatus({show:false})
        setShow(prev=>{return {...prev,show:false}} )
      })
  
  }

  return (
    <MyForm
      showStatus={showStatus}
      setShow={setShow}
      form={
        <MyLogin
          submitting={submitting}
          errList={errList}
          setFormData={setFormData}
        />
      }
    />
  );
}


  