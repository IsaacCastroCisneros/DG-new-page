import React from 'react'
import { useState } from 'react';
import Button from '../../../../../../components/Button/Button';
import FormInput from '../../../../../../components/FormInput/FormInput';
import { useContext } from 'react';
import { productContext } from '../../../../Product';
import { useLocation } from "react-router-dom";
import useMyQuery from '../../../../../../customHooks/useMyQuery';
import postRequest from '../../../../../../helpers/postRequest';
import PopUp from '../../../../../../components/PopUp/PopUp';
import StatusMsg from '../../../../../../components/StatusMsg/StatusMsg';
import useMyErrList from '../../../../../../customHooks/useMyErrList';
import { requestInformation } from '../../../../../../helpers/validations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle,faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { appContext } from '../../../../../../context/AppContext';

export default function HeroForm({isPopUp=false,closeButton=false}) 
{
  const {tipo,titulo,id} = useContext(productContext);

  const{setShowPopUp:setShowThisPopUp}=useContext(appContext)

  const {data:ciudad}=useMyQuery({type:'geo'})
  const[formData,setFormData]=useState({})
  const[showPopUp,setShowPopUp]=useState({show:false,status:'success'})

  const[errList]=useMyErrList(formData,requestInformation)
  
  const location = useLocation()

  function submitForm(e)
  {
    e.preventDefault();

    if(errList!=='ok')
    {
      return setShowPopUp({show:true,status:'failed'})
    }

    const form = new FormData()
    form.append('nombres',formData.name)
    form.append('correo',formData.email)
    form.append('telefono',formData.phone)
    form.append(`${tipo}`,titulo)
    form.append(`id_${tipo}`,id)
    form.append(`ciudad`,ciudad)
    form.append(`contenido`,`Hola deseo informacion del ${tipo} ${titulo}`)
    form.append(`pagina`,"https://www.desarrolloglobal.pe" + location.pathname)

    postRequest({type:tipo,data:form,request:'setProspecto'})
    .then(res=>
      {
        if(res)
        {
          return setShowPopUp({show:true,status:'success'})
        }
        setShowPopUp({show:true,status:'failed'})
      })
  }

  return (
    <>
      {!isPopUp && (
        <PopUp
          setShow={setShowPopUp}
          show={showPopUp.show}
          popUp={<StatusMsg setShow={setShowPopUp} status={showPopUp.status} />}
          closeButton={false}
        />
      )}
      <div className="bg-myPurple relative px-[3rem] heroProduct:px-[2.5rem] py-[1.5rem] rounded-[.5rem] heroProduct:translate-y-[2rem]">
        {closeButton && (
          <button className="absolute top-[-1rem] right-[-1rem] rounded-[100%] flex justify-center items-center text-[#fff] text-[1.2rem] w-[3rem] h-[3rem] border-[#fff] border-[1px] bg-black"
           onClick={()=>setShowThisPopUp(prev=>{return {...prev,show:false}})}
           >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        )}
        {isPopUp && showPopUp.show && showPopUp.status === "success" && (
          <MyMsg
            icon={faCheckCircle}
            styles={"!bg-green-500"}
            label={"Se enviaron los datos"}
          />
        )}
        {isPopUp && showPopUp.show && showPopUp.status === "failed" && (
          <MyMsg
            icon={faXmarkCircle}
            styles={"!bg-red-500"}
            label={"A ocurrido un error vuelve a intentarlo"}
          />
        )}
        <h1 className="text-myGreen2 text-[32px] mb-[.5rem] text-center heroProduct:text-[23px]">
          INSCRÍBETE AQUÍ
        </h1>
        <p className="text-[16px] block text-[#fff] font-medium mb-[1rem] text-center heroProduct:text-[16px]">
          Déjanos tus datos y nos contactaremos contigo
        </p>
        <form className="w-[100%] text-[#fff]" onSubmit={submitForm}>
          <div className="flex flex-col gap-[.8rem] w-[100%] mb-[1rem]">
            <FormInput
              icon={"/img/icons/user.png"}
              placeHolder={"Ingresar Primer Nombre"}
              onChange={(e) =>
                setFormData((prev) => {
                  return { ...prev, name: e.target.value };
                })
              }
              onKeyPress={(e) => {
                if (e.code.includes("Key")) return;
                e.preventDefault();
              }}
              errLabel={errList?.name}
            />
            <FormInput
              icon={"/img/icons/carta.png"}
              placeHolder={"Ingresar Correo Electrónico"}
              onChange={(e) => {
                if (e.target.value.length > 50) {
                  e.target.value = e.target.value.substr(
                    0,
                    e.target.value.length - 1
                  );
                }
                setFormData((prev) => {
                  return { ...prev, email: e.target.value };
                });
              }}
              errLabel={errList?.email}
            />
            <FormInput
              icon={"/img/icons/tel.png"}
              placeHolder={"Ingresar Celular"}
              onChange={(e) => {
                if (e.target.value.length > 9) {
                  e.target.value = e.target.value.substr(
                    0,
                    e.target.value.length - 1
                  );
                }
                setFormData((prev) => {
                  return { ...prev, phone: e.target.value };
                });
              }}
              onKeyPress={(e) => {
                if (e.code.length === 7) return;
                e.preventDefault();
              }}
              errLabel={errList?.phone}
            />
          </div>
          <div className="flex mb-[1rem] gap-[.5rem]">
            <input checked type={"checkbox"} />
            <label className="text-center text-[12px]">
              Acepto política de privacidad de datos personales
            </label>
          </div>
          <Button
            label={"SOLICITAR INFORMACIÓN"}
            styles={{
              button:
                "!bg-myRed !px-0 w-[100%] py-[.7rem] heroProduct:!px-[.7rem]",
              span: "!text-[18px] !font-medium heroProduct:!text-[15px]",
            }}
            onClick={() => setShowPopUp(true)}
          />
        </form>
      </div>
    </>
  );
}



function MyMsg({ icon,styles,label }) 
{
  return (
    <p
      className={`flex gap-[.5rem] px-[.5rem] py-[.2rem] rounded-[.5rem] left-[50%] translate-x-[-50%] translate-y-[-50%] items-center text-[#fff] absolute top-0 ${styles}`}
    >
      <span>
        <FontAwesomeIcon size="xl" icon={icon} />
      </span>
      <span className=' whitespace-nowrap' >{label}</span>
    </p>
  );
}
    