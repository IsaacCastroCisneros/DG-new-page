import React,{useState} from 'react'
import Button from '../../../../../../components/Button/Button';
import FormInput from '../../../../../../components/FormInput/FormInput';
import useMyErrList from '../../../../../../customHooks/useMyErrList';
import useMyQuery from '../../../../../../customHooks/useMyQuery';
import Selector from './Components/Selector';
import {requestInformation2} from '../../../../../../helpers/validations'
import postRequest from '../../../../../../helpers/postRequest';
import StatusMsg from '../../../../../../components/StatusMsg/StatusMsg';
import { useContext } from 'react';
import { appContext } from '../../../../../../context/AppContext';
import { formCleaner } from '../../../../../../helpers/formCleaner';


export default function FormCard() 
{
  const{setShowPopUp}=useContext(appContext)

  const{data:cursos}=useMyQuery({type:'cursos'})
  const{data:diplomas}=useMyQuery({type:'diplomas'})
  const{data:diplomados}=useMyQuery({type:'diplomados'})

  const {data:ciudad}=useMyQuery({type:'geo'})

  const[formData,setFormData]=useState({program:'no-value'})

  const[errList]=useMyErrList(formData,requestInformation2)

  const programs = cursos&&diplomas&&diplomados ? [...cursos,...diplomas,...diplomados] : []

  function submitting(e)
  {
    e.preventDefault();

    if (errList !== "ok" || formData.program === "no-value") {
      return setShowPopUp((prev) => {
        return {
          ...prev,
          show: true,
          popUp: <StatusMsg setShow={setShowPopUp} status={"failed"} />,
        };
      });
    }

    const form = new FormData();
    form.append("nombres", formData.name);
    form.append("correo", formData.email);
    form.append("telefono", formData.phone);
    form.append(`${formData.program.tipo}`, formData.program.titulo);
    form.append(`id_${formData.program.tipo}`, formData.program.id);
    form.append(`ciudad`, ciudad);
    form.append(
      `contenido`,
      `Hola deseo informacion del ${formData.program.tipo} ${formData.program.titulo}`
    );
    form.append(
      `pagina`,
      "https://www.desarrolloglobal.pe" + location.pathname
    );

    postRequest({
      type: formData.program.tipo,
      data: form,
      request: "setProspecto",
    }).then((res) => {
      if (res) {
        setFormData(prev=>formCleaner(prev))
        return setShowPopUp((prev) => {
          return {
            ...prev,
            show: true,
            popUp: <StatusMsg setShow={setShowPopUp} status={"success"} />,
          };
        });
      }
      
      setShowPopUp((prev) => {
        return {
          ...prev,
          show: false,
          popUp: <StatusMsg setShow={setShowPopUp} status={"failed"} />,
        };
      });
    });
  }

  return (
    <>
      <div
        className=" bg-[#fff] px-[2rem] pt-[1rem] pb-[2rem] w-[410px] h-[494px] flex flex-col justify-between rounded-[.6rem] phone:w-[auto] phone:h-[auto] "
        onSubmit={submitting}
      >
        <h1 className="capitalize text-center text-myPurple font-bold text-[34px] block mb-[1rem] phone:text-[25px]">
          dejanos tus datos y te llamamos
        </h1>
        <form
          className="flex flex-col gap-[1rem] phone:justify-between"
        >
          <FormInput
            placeHolder={"Ingresa Nombre"}
            value={formData.name}
            type={"simple"}
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, name: e.target.value };
              })
            }
            onlyText={true}
            errLabel={errList?.name}
          />
          <FormInput
            placeHolder={"Tu Email"}
            value={formData.email}
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
            value={formData.phone}
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
            onlyNum={true}
            errLabel={errList?.phone}
          />
          <Selector
            cursos={cursos}
            value={formData.programs}
            diplomas={diplomas}
            diplomados={diplomados}
            errLabel={errList?.program}
            onChange={(e) =>
              {
                setFormData((prev) => {
                  return { ...prev, program:programs.find(pro=>pro.id===e.target.value)||'' };
                })
              }
            }
          />
          <Button
            label="Solicitar Informacion"
            type={'submit'}
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


