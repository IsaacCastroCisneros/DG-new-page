import React,{useState} from 'react'
import Button from '../../../../../../components/Button/Button';
import FormInput from '../../../../../../components/FormInput/FormInput';
import useMyErrList from '../../../../../../customHooks/useMyErrList';
import useMyQuery from '../../../../../../customHooks/useMyQuery';
import Selector from './Components/Selector';
import {requestInformation} from '../../../../../../helpers/validations'
import PopUp from '../../../../../../components/PopUp/PopUp';
import postRequest from '../../../../../../helpers/postRequest';
import StatusMsg from '../../../../../../components/StatusMsg/StatusMsg';


export default function FormCard() 
{
  const{data:cursos}=useMyQuery({type:'cursos'})
  const{data:diplomas}=useMyQuery({type:'diplomas'})
  const{data:diplomados}=useMyQuery({type:'diplomados'})

  const {data:ciudad}=useMyQuery({type:'geo'})

  const[formData,setFormData]=useState({})
  const[showPopUp,setShowPopUp]=useState({show:false,status:'success'})

  const[errList]=useMyErrList(formData,requestInformation)

  function submitting(e)
  {
    e.preventDefault();

    console.log(errList)
    if(errList!=='ok')
    {
      return setShowPopUp({show:true,status:'failed'})
    }

    const form = new FormData()
    form.append('nombres',formData.name)
    form.append('correo',formData.email)
    form.append('telefono',formData.phone)
    form.append(`${formData.program.tipo}`,formData.program.titulo)
    form.append(`id_${formData.program.tipo}`,formData.program.id)
    form.append(`ciudad`,ciudad)
    form.append(`contenido`,`Hola deseo informacion del ${formData.program.tipo} ${formData.program.titulo}`)
    form.append(`pagina`,"https://www.desarrolloglobal.pe" + location.pathname)

    postRequest({type:formData.program.tipo,data:form,request:'setProspecto'})
    .then(res=>
      {
        console.log(res)
        if(res)
        {
          return setShowPopUp({show:true,status:'success'})
        }
        setShowPopUp({show:true,status:'failed'})
      })
  }

  console.log(formData)

  return (
    <>
      <PopUp 
       setShow={setShowPopUp}
       show={showPopUp.show}
       popUp={<StatusMsg setShow={setShowPopUp} status={showPopUp.status}/> }
       closeButton={false}
       />
      <div
        className=" bg-[#fff] px-[2rem] pt-[1rem] pb-[2rem] w-[410px] h-[494px] flex flex-col justify-between rounded-[.6rem] phone:w-[auto] phone:h-[auto] "
        onSubmit={submitting}
      >
        <h1 className="capitalize text-center text-myPurple font-bold text-[34px] block mb-[1rem] phone:text-[25px]">
          dejanos tus datos y te llamamos
        </h1>
        <form
          action=""
          className="flex flex-col gap-[1rem] phone:justify-between"
        >
          <FormInput
            placeHolder={"Ingresa Nombre"}
            type={"simple"}
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
            placeHolder={"Tu Email"}
            type={"simple"}
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
            placeHolder={"Ingresa Celular"}
            type={"simple"}
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
          <Selector
            cursos={cursos}
            diplomas={diplomas}
            diplomados={diplomados}
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, program: e.target.value };
              })
            }
          />
          <Button
            label="Solicitar Informacion"
            styles={{
              button: "!bg-myRed !py-[.7rem] !mt-[.3rem] phone:px-[1rem]",
              span: "!text-[1.2rem]",
            }}
          />
        </form>
      </div>
    </>
  );
}


