import React from 'react'
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

export default function MySignUp(props) 
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
        <strong className="text-[24px]">Soy Nuevo Usuario</strong>
        <p className="mb-[1.5rem]">
          Registrate para poder acceder al aula virtual de Centro de
          Capacitación y Desarrollo Global.
        </p>
        <form onSubmit={submitting}>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(13rem,1fr))] gap-[1rem]">
            <FormInput
              placeHolder={"Nombres"}
              value={formData?.userName}
              type={"simple"}
              errLabel={errList?.userName}
              okBorder={true}
              onlyText={true}
              onChange={(e) =>
                setFormData((prev) => {
                  return { ...prev, userName: e.target.value };
                })
              }
            />
            <FormInput
              placeHolder={"Apellidos"}
              value={formData?.userLastName}
              type={"simple"}
              errLabel={errList?.userLastName}
              okBorder={true}
              onlyText={true}
              onChange={(e) =>
                setFormData((prev) => {
                  return { ...prev, userLastName: e.target.value };
                })
              }
            />
            <FormInput
              placeHolder={"E-mail"}
              value={formData?.userEmail}
              type={"simple"}
              errLabel={errList?.userEmail}
              okBorder={true}
              onChange={(e) =>
                setFormData((prev) => {
                  return { ...prev, userEmail: e.target.value };
                })
              }
            />
            <FormInput
              placeHolder={"DNI"}
              value={formData?.userDni}
              type={"simple"}
              inputType={"number"}
              errLabel={errList?.userDni}
              okBorder={true}
              onlyNum={true}
              onChange={(e) =>
                {
                  if (e.target.value.length > 8) {
                    e.target.value = e.target.value.substr(
                      0,
                      e.target.value.length - 1
                    );
                  }
                  setFormData((prev) => {
                    return { ...prev, userDni: e.target.value };
                  })
                }
              }
            />
            <FormInput
              placeHolder={"Telefono"}
              value={formData?.userPhone}
              inputType={"number"}
              type={"simple"}
              errLabel={errList?.userPhone}
              okBorder={true}
              onlyNum={true}
              onKeyPress={(e) => {
                if (e.code.length === 7||e.code.includes('Digit')) return;
                e.preventDefault();
              }}
              onChange={(e) =>
                {
                  if (e.target.value.length > 9) {
                    e.target.value = e.target.value.substr(
                      0,
                      e.target.value.length - 1
                    );
                  }
                  setFormData((prev) => {
                    return { ...prev, userPhone: e.target.value };
                  })
                }

              }
            />
             <FormInput
              placeHolder={"Contraseña"}
              value={formData?.userPassword}
              type={"simple"}
              errLabel={errList?.userPassword}
              okBorder={true}
              inputType={"password"}
              onChange={(e) =>
                setFormData((prev) => {
                  return { ...prev, userPassword: e.target.value };
                })
              }
            />
            <FormInput
              placeHolder={"Repetir Contraseña"}
              value={formData?.userPasswordRetry}
              type={"simple"}
              errLabel={errList?.userPasswordRetry}
              inputType={"password"}
              okBorder={true}
              onChange={(e) =>
                setFormData((prev) => {
                  return { ...prev,  userPasswordRetry: e.target.value };
                })
              }
            />
          </div>
          <Button
            label={"Registrarse"}
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
