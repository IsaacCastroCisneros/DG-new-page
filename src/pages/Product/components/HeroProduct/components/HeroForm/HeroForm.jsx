import React from 'react'
import { useState } from 'react';
import Button from '../../../../../../components/Button/Button';
import FormInput from '../../../../../../components/FormInput/FormInput';
import { useContext } from 'react';
import { useLocation } from "react-router-dom";
import useMyQuery from '../../../../../../customHooks/useMyQuery';
import postRequest from '../../../../../../helpers/postRequest';
import useMyErrList from '../../../../../../customHooks/useMyErrList';
import { requestInformation } from '../../../../../../helpers/validations';
import { faCheckCircle,faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import { appContext } from '../../../../../../context/AppContext';
import MyMsg from '../../../../../../components/MyMsg/MyMsg';
import StatusMsg from '../../../../../../components/StatusMsg/StatusMsg';
import { formCleaner } from '../../../../../../helpers/formCleaner';

export default function HeroForm(props) 
{
  const{setShowPopUp}=useContext(appContext)
  const[showStatus,setShowStatus]=useState(false)
  const {tipo,titulo,id,isPopUp=false}=props;

  const{data:ciudad}=useMyQuery({type:'geo'})
  const[formData,setFormData]=useState({})

  const[errList]=useMyErrList(formData,requestInformation)
  
  const location = useLocation()

  function submitForm(e)
  {
    e.preventDefault();

    if(errList!=='ok')
    {
      if(isPopUp)
      {
        return setShowStatus('failed')
      }
      return setShowPopUp((prev) => {
        return {
          ...prev,
          show: true,
          popUp: <StatusMsg setShow={setShowPopUp} status={"failed"} />,
          closeButton: false,
        };
      });
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
          setFormData(prev=>formCleaner(prev))
          if(isPopUp)
          {
            return setShowStatus("success");
          }
          return setShowPopUp((prev) => {
            return {
              ...prev,
              show: true,
              popUp: <StatusMsg setShow={setShowPopUp} status={"success"} />,
              closeButton: false,
            };
          });
        }

        if(isPopUp)
        {
          return setShowStatus("failed");
        }

        setShowPopUp((prev) => {
            return {
              ...prev,
              show: true,
              popUp: <StatusMsg setShow={setShowPopUp} status={"failed"} />,
              closeButton: false,
            };
          });
      })
  }

  return (
    <>
      <div className="bg-myPurple relative px-[3rem] heroProduct:px-[2.5rem] py-[1.5rem] rounded-[.5rem] heroProduct:translate-y-[2rem]">
        {isPopUp && showStatus === "success" && (
          <MyMsg
            icon={faCheckCircle}
            styles={"!bg-green-500"}
            label={"Se enviaron los datos"}
          />
        )}
        {isPopUp && showStatus === "failed" && (
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
              value={formData.name}
              placeHolder={"Ingresar Primer Nombre"}
              onChange={(e) =>
                setFormData((prev) => {
                  return { ...prev, name: e.target.value };
                })
              }
              onlyText={true}
              errLabel={errList?.name}
            />
            <FormInput
              icon={"/img/icons/carta.png"}
              value={formData.email}
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
              value={formData.phone}
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
              onlyNum={true}
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
          />
        </form>
      </div>
    </>
  );
}




    