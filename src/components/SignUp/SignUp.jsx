import React,{useState} from 'react'
import { useContext } from 'react'
import useMyErrList from '../../customHooks/useMyErrList'
import { appContext } from '../../context/AppContext'
import postRequest from '../../helpers/postRequest'
import { signUp } from '../../helpers/validations'
import MyForm from '../MyForm/MyForm'
import MySignUp from '../MySignUp/MySignUp'

export default function SignUp({setShow,setShowOkPopUp}) 
{
    const[formData,setFormData]=useState({})
    const[showStatus,setShowStatus]=useState({show:false})
    const{setUser}=useContext(appContext)

    const[errList]=useMyErrList(formData,signUp)

    function submitting(e)
    {
        e.preventDefault()
        
        if(errList!=='ok')return setShowStatus({show:true,label:"A ocurrido un error valida los datos ingresados"})

        const form = new FormData()
        form.append('correo',formData.userEmail)
        form.append('clave',formData.userPassword)
        form.append('nombres',formData.userName)
        form.append('apellidos',formData.userLastName)
        form.append('dni',formData.userDni)
        form.append('celular',formData.userPhone)

        postRequest({type:'signUp',data:form})
        .then(res=>
        {
            if(res===false)return setShowStatus({show:true,label:"El email o contraseña ya esta registrado"})

            const form = new FormData()
            form.append('correo',formData.userEmail)
            form.append("clave", formData.userPassword)

            postRequest({type:'login',data:form})
            .then(res=>
              {
                localStorage.setItem('userDG',JSON.stringify(res))
                document.cookie = `token=${res.token};domain=.desarrolloglobal.pe`;
                setUser(res)
                setShowStatus({show:false})
                setShow(prev=>{return {...prev,show:false}})
                setShowOkPopUp({show:true})
              })
        })

    }

    return (
      <>
        <MyForm
          showStatus={showStatus}
          setShow={setShow}
          hiddenEarly={"signUp:hidden"}
          form={
            <MySignUp
              submitting={submitting}
              errList={errList}
              setFormData={setFormData}
            />
          }
        />
      </>
    );
}