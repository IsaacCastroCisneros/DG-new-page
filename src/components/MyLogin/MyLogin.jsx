import React from 'react'
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

export default function MyLogin(props) 
{
  const 
  {
    submitting,
    errList,
    setFormData,
    formData,
    isLoading
  }=props

  return (
    <>
      <h1 className="text-[24px] block mb-[1.5rem]">Bienvenido 🙂</h1>
      <strong className="text-[24px] block pr-[8rem]">Iniciar Sesión</strong>
      <p className="mb-[1.5rem]">Ingresa tu email y contraseña</p>
      <form onSubmit={submitting} className="flex flex-col gap-[1rem]">
        <FormInput
          placeHolder={"Correo Electronico"}
          value={formData?.email}
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
          value={formData?.password}
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
          isLoading={isLoading}
          styles={{
            button: "w-[100%] mt-[1.5rem] py-[.6rem]",
          }}
          type={"submit"}
        />
      </form>
    </>
  );
}
